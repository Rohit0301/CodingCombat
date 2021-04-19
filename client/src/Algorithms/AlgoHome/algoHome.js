import {React,useState,useEffect} from 'react';
import Navbar from '../../Navbar/navbar';
import Algocard from './algoCard';
import './algoHome.css';
import axios from "axios";
import {Paper,Grid, Typography, TextField} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:"6rem",
      width: '90%',
      height:'.5rem',
      borderRadius:'6rem',
    },
  }));



export default function AlgoHome(){
    const classes = useStyles();


    //states
    const [Algo, setAlgo] = useState([]);
    const [TempArr, setTempArr] = useState([]);
    const [isLoading,setIsLoading]=useState(true);


    // Api calling
    useEffect(() => {
        const res = axios.get(`https://bruteforce-dsa-backend-api.herokuapp.com/Algorithms/`)
        .then((response) => {
            setAlgo(response["data"])
            setIsLoading(false);
        });
        
    },[])


    //showing data function
    const showAlgo = ()=>{
        if(TempArr.length===0){
            setTempArr(Algo);
        }
        const arr=TempArr.map((item,index) => {
            if(item!==undefined){    
                var name=item.Algorithm_Name;
                return <Algocard name={name} key={index}/>;
            }
        });

       return arr;
    }


    
    //search function
    const handleChange = (e) =>{
        const value=e.target.value;
        if(value===undefined){
            setTempArr(Algo);
        }
        const arr=Algo.map((item) => {
            var name=item.Algorithm_Name;
            if(name.toLowerCase().indexOf(value.toLowerCase())!==-1){
                return item;
            }
        })
        if(arr.length>0){
            setTempArr(arr);
        }
        else{
            setTempArr(Algo);
        }
       
      }


  
  


  if(isLoading){
    return(
        <>
           <Navbar/>
           <center>
             <LinearProgress className={classes.root}/>
            </center>   

        </>
    );
  }
  else{
    return(
        <>
        <Navbar/>   
        <Paper className="mainBar" elevation={3}>
            <Typography className="algoHeading">Algorithms</Typography>
            <TextField className="algoField" placeholder="Search..."  variant="outlined" onChange={handleChange}></TextField>
        </Paper>
         <Grid container direction="row" spacing={1}>
           {showAlgo()}
           </Grid>
        </>
    );
  }
}