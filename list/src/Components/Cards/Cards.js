import  Grid  from "@material-ui/core/Grid";
import  Box  from "@material-ui/core/Box";
import {MediaCard} from './MediaCard'

const mediaCards=[
    {
        image:"/source/test1.jpg" ,
        title:"mirror",
        description:"mirror gg",
    },
    {
        image:"./source/logo.png" ,
        title:"mirror",
        description:"mirror gg",
    },
    {
        image:"./source/logo.png" ,
        title:"mirror",
        description:"mirror gg",
    },
];



export default function Cards(){

    return (
        <Box p={5}>
            <Grid container spacing={5}>

                    {mediaCards.map((mediaCard,i)=>{
                        return ( 
                        <Grid key={i} item>
                            <MediaCard  {...mediaCard} />
                        </Grid>
                        );
                    })}

            </Grid>
        </Box>
    );
}