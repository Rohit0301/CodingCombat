import React  from 'react';
import {Paper,Grid,Typography,Button, Link} from '@material-ui/core';
import './videoCard.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
export default function videoCard(props){
    const {title, link} = props
    
    return(
        <> 
         <Grid lg={3} xs={12} sm={6} md={4}>
            <Paper className="videocard" elevation={2}>
                <center>
                <Typography className="videoTitle"> {title} </Typography>
                    <a target="_blank" href={link}>
                        <PlayCircleOutlineIcon className="playButton"/> 
                    </a>
                </center>
            </Paper>
         </Grid>   
        </>
    );
}