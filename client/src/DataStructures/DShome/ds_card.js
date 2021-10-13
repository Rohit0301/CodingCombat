import React from 'react'
import { Paper, Grid, Typography} from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import './ds_Card.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      borderColor: '#e91e63',
      borderRadius: '2rem',
      borderWidth: '.3rem',
      padding: 0,
      height: '5rem',
      margin: '4rem',
      cursor: 'pointer'
    },
  }));

function DScard(props) {
    const {name} = props
    const classes = useStyles()

    return(
        <>
        <Grid item lg={4} xs={13} sm={7} md={5}>
            <NavLink to={`/DataStructures/${name}/`}
                className="link" exact>
            
                <Paper className="DScard" elevation={3} >
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
