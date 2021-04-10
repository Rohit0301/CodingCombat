import {React,useState} from 'react';
import Navbar from '../../Navbar/navbar';
import Algocard from './algoCard';
import './algoHome.css';
import {Paper,Grid, Typography, TextField} from '@material-ui/core';
export default function AlgoHome(){
    const [Algo, setAlgo] = useState(['Dp','Greedy','Recursion','Graph theory','Game theory','Bit manipulation','Number Theory']);
    const [TempArr, setTempArr] = useState([]);
    const showAlgo = ()=>{
        if(TempArr.length===0){
            setTempArr(Algo);
        }
        const arr=TempArr.map((item,index) => {
            if(item!==undefined){
               return <Algocard name={item} key={index}/>;
            }
        });
       return arr;
    }
    const handleChange = (e) =>{
      const value=e.target.value;
      if(value===undefined){
          setTempArr(Algo);
      }
      const arr=Algo.map((item) => {
          if(item.toLowerCase().indexOf(value.toLowerCase())!==-1){
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