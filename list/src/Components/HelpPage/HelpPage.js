import React, { Component,Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import docMenu from "./menu.json";
//import "./HelpPage.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from "@material-ui/core";


import AppBar from '@material-ui/core/AppBar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ListSubheader from '@material-ui/core/ListSubheader';

import CircularProgress from '@material-ui/core/CircularProgress';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


/**
 * 帮助文档
 */
export default class HelpPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
          // 帮助文档正文内容
          docContent: undefined,
          // 是否已经获取了文档
          loaded: false
        };
        this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
        this.classes = makeStyles((theme) => ({
            root: {
              display: 'flex',
            },
            drawer: {
              [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
              },
            },
            appBar: {
              [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
              },
            },
            menuButton: {
              marginRight: theme.spacing(2),
              [theme.breakpoints.up('sm')]: {
                display: 'none',
              },
            },
            // necessary for content to be below app bar
            toolbar: theme.mixins.toolbar,
            drawerPaper: {
              width: drawerWidth,
            },
            content: {
              flexGrow: 1,
              padding: theme.spacing(3),
            },
          }));
    }


    
    
    /*
    根据json文件递归生成文档导航菜单项目
     @param source 文档导航菜单json文件
    */
    generateMenuItems(source){
        console.log(source)
        source.sort((a, b) => {
            if ("key" in a && "key" in b) {
              return a.key - b.key;
            } else if ("key" in a) {
              return -1;
            } else if ("key" in b) {
              return 1;
            } else {
              return a.title < b.title ? -1 : 1;
            }
          });
        return source.map(menu=>{
            if(menu.children){
                return(
                    <li key={menu.path} >
                      <ul>
                        <ListSubheader>{menu.title}</ListSubheader>
                            {this.generateMenuItems(menu.children)}
                      </ul>
                    </li>
                );
            }else{
                return(
                    <ListItem button key={menu.path}>
                      <ListItemText primary={menu.title} />
                    </ListItem>
                );
            }
        });
   }

   /**
   * 动态导入文档并修改页面正文内容
   *
   * @param path 文档路由
   */
    importAndExecDoc(path) {
        this.setState({docContent:undefined});
        import("./doc/js/" + path.split("/")[2] + ".js")
            .then(module => {
            this.setState({
              docContent: module.default(),
              loaded: true
            });
          })
          .catch(() => {
            console.log("import " + path + " failed");
            this.setState({
              docContent: <h1>No Document Here!</h1>,
              loaded: true
            });
          });
    }

    /**
   * 菜单项目被选中后的回调，修改帮助文档显示的正文内容
   *
   * @param info 选中Menu项的信息。
   *             其中.key是被选中的MenuItem的key
   */
    onMenuItemSelected(info){
        this.setState({
            loaded:false
        });
        this.importAndExecDoc(info.key);
    }

    componentDidMount() {
        this.importAndExecDoc("/doc/docHome");
    }

    render(){
        return(
            <div>
            <main style={{marginTop: "100px" }}>
                <CssBaseline />
                <LinkedBreadcrumb />
                <nav aria-label="mailbox folders">
                    <Drawer classes={this.classes.drawerPaper}>
                        <List>{this.generateMenuItems(docMenu)}</List>
                    </Drawer>
                </nav>
                <main>
                    <Container>
                        <Grid>
                            {this.state.loaded ? (
                                this.state.docContent
                            ) : (
                                <div style={{ textAlign: "center", margin: "50px" }}>
                                    <CircularProgress color="secondary" />
                                </div>
                            )}
                        </Grid>
                    </Container>
                </main>
            </main>
            </div>
        );
    }
}




/*
面包屑组件
*/
class LinkedBreadcrumb extends React.Component{
    /**
   * 路由路径和面包屑标题的对应关系
   */
     breadcrumbNameMap = {
        "/home": "主页",
        "/help": "帮助文档"
    };
    /**
   * 根据json文件递归生成面包屑导航项目
   *
   * @param source 文档导航菜单json文件
   */
    generateBreadcrumbNameMap(source) {
        for (let index in source) {
          if (source.hasOwnProperty(index)) {
            this.breadcrumbNameMap[source[index].path] = source[index].title;
            if (source[index].children) {
              this.generateBreadcrumbNameMap(source[index].children);
            }
          }
        }
    }

    componentDidMount(){
        this.generateBreadcrumbNameMap(docMenu);
    }
    /**
   * 面包屑导航组件
   */
    Component = withRouter(props => {
      const { location } = props;
      const pathSnippets = location.pathname.split("/").filter(i => i);
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Link key={url}>{this.breadcrumbNameMap[url]}</Link>
        );
      });
      const breadcrumbItems = [
          <Link to="/home">主页</Link>
      ].concat(extraBreadcrumbItems);
      return (
        <Breadcrumbs style={{ margin: "20px" }}>{breadcrumbItems}</Breadcrumbs>
      );
    });

    render(){
        return <this.Component />
    }
}   