import React from 'react'
import { Paper, Grid, Typography} from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import './ds_Card.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      borderColor: '#e91e63',
      borderRadius: '1rem',
      borderWidth: '.2rem',
      padding: 0,
      height: '4rem',
      margin: '3rem',
      cursor: 'pointer'
    },
  }));

function DScard(props) {
    const {name} = props
    const classes = useStyles()

    return(
        <>
        <Grid item lg={3} xs={12} sm={6} md={4}>
            <NavLink to={`/DataStructures/${name}/`}
                className="link" exact>
            
                <Paper className={classes.root} variant="outlined" >
                    <center>
                        <Typography className="dstitle">
                            {name}
                        </Typography>
                    </center>
                </Paper>
                
            </NavLink> 
        </Grid>   
        
        </>
    );
}

export default DScard
