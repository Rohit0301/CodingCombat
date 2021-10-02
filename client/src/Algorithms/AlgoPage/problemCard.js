import React,{useState} from 'react';
import {Paper,Grid,Typography,Button, makeStyles} from '@material-ui/core';
import './problemCard.css';
import { Redirect } from 'react-router';



export default function ProblemCard(props){
    const { title , link , diff} = props
    const color=["#14c914","orange","red"];
    
    return(
        <>
            <Grid lg={12} xs={12} sm={12} md={12} >
                <Paper className="problemcard" elevation={2} style={{backgroundColor:`${color[diff-1]}`}}>
                
                        <Typography display="block" className="problemTitle">{title}</Typography> 
                        <Button className="solveButton">Solve</Button>

                </Paper>
            </Grid>   
       </>
    );
    
}