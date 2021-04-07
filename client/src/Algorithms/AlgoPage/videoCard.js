import React  from 'react';
import {Paper,Grid,Typography,Button} from '@material-ui/core';
import './videoCard.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
export default function videoCard(){
    return(
        <> 
         <Grid lg={3} xs={12} sm={6} md={4}>
            <Paper className="videocard" elevation={2}>
                <center>
                <Typography className="videoTitle">Youtube video title</Typography>
                    <PlayCircleOutlineIcon className="playButton"/>   
                </center>
            </Paper>
         </Grid>   
        </>
    );
}