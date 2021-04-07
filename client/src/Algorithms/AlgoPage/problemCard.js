import React from 'react';
import {Paper,Grid,Typography,Button} from '@material-ui/core';
import './problemCard.css';
export default function problemCard(){
    return(
        <>
            <Grid lg={12} xs={12} sm={12} md={12}>
                <Paper className="problemcard" elevation={2}>
                
                        <Typography display="block" className="problemTitle">Problem Statement</Typography> 
                        <Typography className="problemDifficulty">Easy</Typography> 
                        <Button className="solveButton">Solve</Button>

                </Paper>
            </Grid>   
       </>
    );
    
}