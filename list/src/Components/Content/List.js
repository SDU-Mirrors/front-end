import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Grid,TextField} from '@material-ui/core';
import Title from './Title'

//创建表格数据
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

//测试数据
const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
  ];
   
function preventDefault(event){
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    textField:{
        width:300,
        height:'auto'
    },
}));

export default function Orders(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item sm>
                    <Title>[ ] 镜像列表</Title>
                </Grid>
                <Grid item sm>
                    <TextField className={classes.textField} id="outlined-basic" label="搜索" variant="outlined" />
                </Grid>
            </Grid>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>镜像名称</TableCell>
                        <TableCell>大小</TableCell>
                        <TableCell>最近同步时间</TableCell>
                        <TableCell>同步状态</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.shipTo}</TableCell>
                        <TableCell>{row.paymentMethod}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    )
}
