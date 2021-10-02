import React,{useState,useEffect} from 'react';

import Navbar from '../../Navbar/navbar';
import './algopage.css';

import PropTypes      from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Box, Typography, Tab, Tabs} from '@material-ui/core';
import axios from 'axios';
import VideoCard   from './videoCard';
import BlogCard    from './blogCard';
import ProblemCard from './problemCard';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [Prob,  setProb ] = useState( [ ] );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let location =  window.location.href
  location = location.slice(37,42)
  console.log(location);
  let prob_url  = `https://bruteforce-dsa-backend-api.herokuapp.com/Algorithm/${location}/Questions/`

  useEffect(() => {
    const requestThree   = axios.get(prob_url)
    .then((response) => {
      let responseThree = response.data
      setProb(responseThree);
      
    })
    .catch((err) => {})
  }, [])

  return (
    <div className={classes.root}>
      <Navbar/>
      <Paper className="main">
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="simple tabs example"
        indicatorColor="primary"
        textColor="primary"
        >
          <Tab label="Videos" {...a11yProps(0)} />
          <Tab label="Blogs" {...a11yProps(1)} />
          <Tab label="Practice Problem" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Grid container direction="row" spacing={1}>
          
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>
         </Grid>  

      </TabPanel>
      <TabPanel value={value} index={1}>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container direction="row" spacing={1}>
        {  
          Prob.map( d =>  {
                  return <ProblemCard title={ d['Algorithm_Question_Title'] }
                                      link={ d['Algorithm_Question_Link']}
                                      diff={ d['Algorithm_Question_Difficulty']}
                        />
                  })
            }
        </Grid>  
      </TabPanel>
    </div>
  );
}
