import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar/navbar';
import './About.css'
import ScrollCard from './scrollcard';
export default function About (){
    return(
        <>
          <Navbar/>
        <Grid className="main">
             
                <Grid container direction="row" className="aboutbody">
                    <Grid item className="left" lg={12} sm={12} md={12} xs={12}>
                            <Paper className="about">
                                <center>
                                <Typography className="heading1">ABOUT US</Typography>
                                <Typography className="abouttext">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                
                                </Typography>
                                </center>
                            </Paper>
                   </Grid>
                   {/* <Grid item className="right" lg={12} sm={12} md={12}>
                   <Paper className="developer">
                                <center>
                                <Typography className="heading1">DEVELOPERS</Typography>
                                <Grid container direction="row">
                                
                                    <Grid item className="card" lg={12} sm={12} md={12} xs={12}>

                                    </Grid>
                                    <Grid item className="card" lg={12} sm={12} md={12} xs={12}>
                                        
                                    </Grid>
                                    <Grid item className="card" lg={12} sm={12} md={12} xs={12}>
                                        
                                    </Grid>
                                    <Grid item className="card" lg={12} sm={12} md={12} xs={12}>
                                        
                                    </Grid>
                                    <Grid item className="card" lg={12} sm={12} md={12} xs={12}>
                                        
                                    </Grid>
                                </Grid>
                                </center>
                            </Paper>
                   </Grid> */}
                </Grid>
        </Grid>

        </>
    );
}