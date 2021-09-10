import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import React from "react"
export default function Page(props) {
  // console.log(props)
  // 分页的下边栏
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Pagination count={props.totalPage} defaultPage={props.defaultPage} onChange={props.onChange} />
    </Grid>
  );
}