import React from 'react';
import {Paper,Grid,Typography} from '@material-ui/core';
import './algoCard.css';
import { NavLink } from 'react-router-dom';
export default function algocard(props){
    return(
        <>
         <Grid lg={3} xs={12} sm={6} md={4}>
           <NavLink to={`/Algorithms/${props.name}/`} className="link" >
               <Paper className="algocard" elevation={2}>
                    <center>
                        <Typography className="algotitle">{props.name}</Typography>
                    </center>
               </Paper>
            </NavLink> 
         </Grid>   
        
        </>
    );
}