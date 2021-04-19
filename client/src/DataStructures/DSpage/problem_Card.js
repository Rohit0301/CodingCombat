import React from 'react';
import {Paper,Grid,Typography,Button} from '@material-ui/core';
import './problemCard.css';
export default function problemCard(props){
    const { title , link , diff} = props
    return(
        <>
            <Grid lg={12} xs={12} sm={12} md={12}>  
                <Paper className="problemcard" elevation={2}>
                
                        <Typography display="block" className="problemTitle"> {title} </Typography> 
                        <Typography className="problemDifficulty">{diff}</Typography> 
                        <a target="_blank" href={link}>
                            <Button className="solveButton">Solve</Button>
                        </a>
                </Paper>
            </Grid>   
       </>
    );
    
}
