import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid} from '@material-ui/core';
import logo from '../source/logo_white.png'
import sduMirror from '../source/SDUMirror.png'
import oops from '../source/oops.jpg'
import sna from '../source/sna.jpg'
const useStyles = makeStyles((theme) => ({
  footer: {
    minWidth: '1050px',
    marginTop: 'auto',
    backgroundColor: 'RGBA(64,64,64,0.87)',
    color: 'RGBA(255,255,255,0.87)',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: '0px',
    paddingBottom: '0px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  footer_div: {
    paddingTop: '1em',
    display: 'block',
    maxWidth: '1200px'
  },
  footer_body: {
    display: 'flex',
    justifyContent: 'center'
  },
  footer_icp: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '14px',
    paddingTop: '14px'
  },
  icp_text:{
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '14px'
  },
  image_div:{
    display: 'flex',
    justifyContent: 'center'
  },
  image:{
    width: 'max(calc(9vw), 100px)',
    objectFit: 'contain', 
    // padding: theme.spacing(5, 0),
    height:'auto',
    display: 'inline-block'
  },
  un_tag_image: {
    width: 'max(calc(9vw + 1em), 100px + 1em)',
    objectFit: 'contain', 
    // padding: theme.spacing(5, 0),
    height:'auto',
    display: 'inline-block'
  },
  image_body: {
    display: 'block',
    paddingLeft: '30px'
  },
  image_label: {
    display: 'block',
    textAlign: 'center',
    fontSize: '5px'
  },
  contact_us_div: {
    paddingLeft: '30px'
  },
  discription_body:{
    width: 'auto'
  },
  discription: {
    height: 'calc(9vw + 1em)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '40.8px'
  },
  discription_p:{
    marginBottom: '0px',
    fontSize: "16.1px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textIndent: '2em'
  },
  h4_p:{
    color: 'RGBA(255,255,255,0.87)',
    fontSize: "21px",
    marginBottom: "10.5px"
  },
  std_br: {
    lineHeight: '19px'
  }
}));

// class TagedImage extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     // src -> image src
//     // tag -> image label
//     const classes = useStyles();

//     return (
//       <div className={classes.image_body}>
//         <img src={this.props.src} alt= "" className={classes.image}></img>
//         <div className={classes.image_label}>
//           {this.props.label}
//         </div>
//       </div>
//     );
//   }
// }

function TagedImage(props){
  const classes = useStyles();
  return (
    <div className={classes.image_body}>
      <img src={props.src} alt= "" className={classes.image}></img>
      
      <div className={classes.image_label}>
        {props.label}
      </div>
    </div>
  );
}
function UntagedImage(props){
  const classes = useStyles();
  return (
    <div className={classes.image_body}>
      <img src={props.src} alt= "" className={classes.un_tag_image}></img>
    </div>
  );
}



export default function Footer() {
  const classes = useStyles();

  return (

    <footer  className={classes.footer}>
      <div className={classes.footer_div}>
        <div className={classes.footer_body}>
          <div className={classes.discription_body}>
            {/* <br></br>
            <br></br> */}
            <div className={classes.discription}>
              <div className={classes.discription_p}>山东大学镜像站是由山东大学（青岛）学生Oops计算机社团在山东大学（青岛）信息化工作办公室指导下立项，由山东大学（青岛）网管会镜像站学生运营团队运营的开源镜像站平台。</div>
              <div className={classes.discription_p}>本镜像站为技术爱好者、工程师、科研人员等开源爱好者提供开源软件镜像服务，致力于打造以山东大学为中心的开源爱好者社区，提高山东大学影响力。</div>
            </div>
          </div>

          <div >
            <div className={classes.contact_us_div}>
              <div className={classes.h4_p}>联系我们</div>
            </div>
            
            <div className={classes.image_div}>
              <TagedImage src={sduMirror} label={"镜像站开放群"}></TagedImage>
              <TagedImage src={sna} label={"山东大学（青岛）网管会"}></TagedImage>
              <TagedImage src={oops} label={"Oops计算机社团"}></TagedImage>
              <UntagedImage src={logo} label={""}></UntagedImage>
            </div>
          </div>
          {/* footer_body */}
        </div>

        <div className={classes.footer_icp}>
          <div className={classes.icp_text}>Developed&nbsp;by&nbsp;山东大学镜像站前端组</div>
          <div className={classes.icp_text}>Copyright&nbsp;&&nbsp;2019-2022&nbsp;All&nbsp;rights&nbsp;reserved</div>
          <div className={classes.icp_text}><a href="https://beian.miit.gov.cn">鲁ICP备05001952号-1</a></div>
        </div>
        
      </div>
      {/* <Container >
        <Grid container spacing={3} className={classes.ALL}>
          <Grid item xs={6} sm={6}>
            <Grid item xs={8} sm={8} className={classes.left} >
              <Typography variant="body" className={classes.typographyBody}>
                山东大学镜像站是由山东大学（青岛）学生oops计算机社团在山东大学（青岛）信息化工作办公室指导下立项，由山东大学（青岛）网管会镜像站学生运营团队运营的开源镜像站平台。
              </Typography>
            </Grid>

            <Grid item xs={8} sm={8} className={classes.left}>
              <Typography variant="body" className={classes.typographyBody}>
                本镜像站为技术爱好者、工程师、科研人员等开源爱好者提供开源软件镜像服务，致力于打造以山东大学为中心的开源爱好者社区，提高山东大学影响力。
              </Typography>
            </Grid>
            
          </Grid>

          <Grid item  xs={6} sm={6}>
            <Grid item >
              <Typography variant="h4" className={classes.typographyTitle}>
                联系我们
              </Typography>
            </Grid>
            <Grid container justifyContent="center" xs={8} sm={8}>
              <Grid item  xs={4} sm={4}>
                <img src={sduMirror} alt= ""  className={classes.image} />
              </Grid>
              <Grid item  xs={4} sm={4}>
                <img src={oops} alt= ""  className={classes.image} />
              </Grid>
              <Grid item  xs={4} sm={4}>
                <img src={sna} alt= ""  className={classes.image} />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" xs={8} sm={8} >
              <Grid item xs={8} sm={8} >
                  <Typography variant="body" className={classes.typographyFooter}>
                    Copyright @ 2012-2015 ALL rights reserved  
                  </Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                  <Typography variant="body" className={classes.typographyFooter}>
                    鲁ICP备案XXXXX号
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container> */}
    </footer>

  );
}