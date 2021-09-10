import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby"
import DivApp from "../components/DivApp"
import App from "../components/App";
import "../css/blog.css"
import BlogBody from "../components/Content/BlogBody";
import TocBody from "../components/Content/TocBody";
import BlogNavButton from "../components/Content/BlogNavButton";
import $ from "jquery";
const isBrowser = typeof window !== "undefined";
function getAbsolutePosition(element) {
  if (element == null) return { x: 0, y: 0 };
  let cur = element;
  let x = 0;
  while (cur != null) {
    x += cur.offsetLeft;
    cur = cur.offsetParent;
  }
  let y = 0;
  cur = element;
  while (cur != null) {
    y += cur.offsetTop;
    cur = cur.offsetParent;
  }
  return { x: x, y: y };
}

function calcDistance(scrollTop, element) {
  if (element == null) return 0x7fffffff;
  let position = getAbsolutePosition(element);
  if (position['y'] <= scrollTop) return scrollTop - position['y'];
  else return 0x7fffffff;
}

function loopingAnchors(anchors) {
  // 避免因为分数出问题
  let scrollTop = Math.ceil(document.documentElement.scrollTop);
  if (anchors.length == 0) return;
  let chooser = 0;
  let flag = 1;
  for (let i = 1; i < anchors.length; i++) {
    let di = calcDistance(scrollTop, anchors[i]);
    let dc = calcDistance(scrollTop, anchors[chooser]);
    if (di != 0x7fffffff) flag = 0;
    if (di <= dc) {
      chooser = i;
    }
  }
  // 都在下面时选最近的
  if (flag) {
    chooser = 0;
    for (let i = 1; i < anchors.length; i++) {
      let di = getAbsolutePosition(anchors[i])['y'];
      let dc = getAbsolutePosition(anchors[chooser])['y'];
      if (di <= dc) {
        chooser = i;
      }
    }
  }
  return chooser; // 得到h标签
}

function flush() {
  $(function () {
    $(".css-aside").find("ul").each(function () {
      this.classList.add("ul-hide");
    });
    $(".css-aside").children("ul").each(function () {
      this.classList.remove("ul-hide");
    });
  });
}

function onSroll(event) {
  $(function () {
    $(".css-aside").find("ul").each(function () {
      this.classList.add("ul-hide");
    });
    $(".css-aside").children("ul").each(function () {
      this.classList.remove("ul-hide");
    });
    let as = $(".css-aside").find("a");
    for (let i = 0; i < as.length; i++) {
      as[i].classList.remove("a-scroll");
    }
    let anchors = Array();
    if (as.length == 0) return;
    for (let i = 0; i < as.length; i++) {
      let cur = $(document.body).find("a[href='" + as[i].getAttribute("href") + "'].anchor");
      if (cur.length != 1) {/*window.alert("wrong!");*/console.log("same anchor are mulity"); }
      anchors.push(cur[0]);
    }
    let i = loopingAnchors(anchors);
    as[i].classList.add("a-scroll");
    let uls = $(as[i]).parents("ul");
    for (let j = 0; j < uls.length; j++) {
      uls[j].classList.remove("ul-hide");
    }
  });
}
const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  if (isBrowser) {
    flush();
    window.onscroll = onSroll;
  }

  return (
    <App>
      <div className={post.tableOfContents !== "" ? "div-app" : "div-app-without-toc"}>
        <div>
          {
            post.tableOfContents !== ""
              ? <BlogBody article={post} previous={previous} next={next} table="with-table" />
              : <BlogBody article={post} previous={previous} next={next} table="without-table" />
          }
          <BlogNavButton previous={previous} next={next} />
        </div>

        {post.tableOfContents !== "" && <TocBody table={post.tableOfContents} />}
      </div>



    </App>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 300)
      html
      tableOfContents(
        maxDepth: 3
      )
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
