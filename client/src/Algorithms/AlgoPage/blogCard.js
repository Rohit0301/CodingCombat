import React from 'react';
import {Paper,Grid,Typography,Button} from '@material-ui/core';
import './blogCard.css';
export default function blogCard(){
    return(
        <>
            <Grid lg={12} xs={12} sm={12} md={12}>
                <Paper className="blogcard" elevation={2}>
                
                        <Typography display="block" className="blogTitle">Blog Heading</Typography> 
                        <Button className="solveButton">SHOW</Button>

                </Paper>
            </Grid>   
       </>
    );
    
}