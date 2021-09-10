const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//生成每篇blog
function createEachBlog(posts, blogPost, createPage) {
  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;
    // console.log(post);
    createPage({
      path: post.fields.slug,
      component: blogPost,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    });
  });
}

// 建立主页分页
function createSeperatePage(posts, homePaginate, createPage) {
  const postsPerPage = 8; // 每页8篇
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: homePaginate,
      context: {
        currentPage: i + 1,
        totalPage: numPages,
        tags_list: getTagsList(posts),
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });
}

// 建立标签页

function getTagsList(posts) {
  let tags_list = [];
  posts.forEach((v, i) => {
    // console.log(v);
    tags_list = tags_list.concat(v.frontmatter.tags);
  });
  tags_list = Array.from(new Set(tags_list));
  // console.log(tags_list);
  return tags_list;
}

function createTagsPage(posts, tags, createPage) {
  let tags_list = getTagsList(posts);
  if (tags_list == undefined) { return; }
  tags_list.forEach((v, i) => {
    if (v != null)
      createPage({
        path: v,
        component: tags,
        context: {
          tags: v,
          tags_list: tags_list,
        },
      });
    // 新的slug
  });
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // 加载模板
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const homePaginate = path.resolve(`./src/templates/index.js`);
  const tags = path.resolve(`./src/templates/tags.js`);
  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter{
              tags
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  if (posts.length > 0) {
    // 生成每篇博客
    createEachBlog(posts, blogPost, createPage);
  }
  // 生成主页分页
  createSeperatePage(posts, homePaginate, createPage);
  // 生成标签页
  createTagsPage(posts, tags, createPage);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  // 创建slug
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: `${value}`,
    });//处理slug prepath
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
