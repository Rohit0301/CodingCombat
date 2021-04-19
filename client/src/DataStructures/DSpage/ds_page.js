import React , { useState, useEffect } from 'react';
import axios from 'axios'

import Navbar from '../../Navbar/navbar';
import '../../Algorithms/AlgoPage/algopage.css';

import PropTypes      from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Box, Typography, Tab, Tabs} from '@material-ui/core';

import VideoCard   from './video_Card';
import BlogCard    from './blog_Card';
import ProblemCard from './problem_Card';


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
  const classes           = useStyles();
  const [value, setValue] = useState(0);
  const [Video, setVideo] = useState( [ ] );
  const [Blog,  setBlog ] = useState( [ ] );
  const [Prob,  setProb ] = useState( [ ] );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  let location =  window.location.href
  location = location.slice(37,42)

  let video_url = 'http://localhost:8000/DataStructure/'+location+'/Videos'
  let blog_url  = 'http://localhost:8000/DataStructure/'+location+'/Blogs'
  let prob_url  = 'http://localhost:8000/DataStructure/'+location+'/Questions'

    
  useEffect(() => {
    const requestOne   = axios.get(video_url)
                              .then((response) => {
                                let responseOne = response.data
                                console.log(responseOne)
                                setVideo(responseOne)
                              })
                              .catch((err) => {})
    
    const requestTwo   = axios.get(blog_url)
                              .then((response) => {
                                let responseTwo = response.data
                                console.log(responseTwo)
                                setBlog(responseTwo)
                              })
                              .catch((err) => {})
    
    const requestThree   = axios.get(prob_url)
                              .then((response) => {
                                let responseThree = response.data
                                console.log(responseThree)
                                setProb(responseThree)
                              })
                              .catch((err) => {})
                              
    },[])

  
  
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
          <Tab label="Videos"           {...a11yProps(0)} />
          <Tab label="Blogs"            {...a11yProps(1)} />
          <Tab label="Practice Problem" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      
      <TabPanel value={value} index={0}>
        <Grid container direction="row" spacing={1}>
          
        {  
          Video.map( d => {
                return <VideoCard title={ d['DataStructure_Video_Title']}
                                  link={ d['DataStructure_Video_URL']}
                       />
                }) 
        } 
        
         
         </Grid>  
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Grid container direction="row" spacing={1}>
        {
          Blog.map( d =>  {
              return <BlogCard title={ d['DataStructure_Blog_Title'] }
                               link={ d['DataStructure_Blog_URL']}
                    />
              })
        }
        </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <Grid container direction="row" spacing={1}>  
        {
          Prob.map( d =>  {
              return <ProblemCard title={ d['DataStructure_Question_Title'] }
                                  link={ d['DataStructure_Question_Link']}
                                  diff={ d['DataStructure_Question_Difficulty']}
                    />
              })
        }
        
        
        </Grid>  
      </TabPanel>

    </div>
  );
}