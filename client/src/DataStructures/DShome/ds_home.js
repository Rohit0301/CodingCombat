import React , {Component, Fragment} from 'react'
import Navbar from '../../Navbar/navbar'
import axios  from 'axios'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'

import DScard from './ds_card'

class DShome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            names: [],
            search: [],
            time: true
        }
    }
    
    componentDidMount(){
  
        axios
            .get("http://localhost:8000/DataStructures/")
            .then((response) => {
                let data       = response.data;
                let parse_name = data.map(d=> d.DataStructure_Name)
                console.log(parse_name)
                this.setState({
                    names: parse_name
                });

                
            })
            .catch((err) => {});
    }
    
    //search function
    handleChange = (event) =>{
        
        const value = event.target.value;
        const arr = this.state.names.map((item) => {
                
                if(item.toLowerCase().indexOf(value.toLowerCase())!==-1)
                {
                    return item;
                }
        })

        var filter = arr.filter(Boolean)
        if(arr.length>0)
        {
            this.setState({
                search: filter,
                time: false
            });
        }
        else
        {
            this.setState({
                search: []
            });
        }       
      }

    render()
    {
        const time = this.state.time
        if (time===true){

                return (
                    <>
                    <Navbar />
                    <Paper className="mainBar" elevation={3}>
                        <Typography className="algoHeading">Data Structures</Typography>
                        <TextField  className="algoField" placeholder="Search..."
                        variant="outlined" onChange={this.handleChange}></TextField>
                    </Paper>
                    <div><br/></div>
                    <Grid container direction="row" spacing={2}>
                        
                        {
                            this.state.names.map( d => {
                                //console.log(d)
                                return <DScard name={d} />
                                })
                        }
                    </Grid>
                    </>
                )
        }
        else
        {
                return (
                    <>
                    <Navbar />
                    <Paper className="mainBar" elevation={3}>
                        <Typography className="algoHeading">Data Structures</Typography>
                        <TextField  className="algoField" placeholder="Search..."
                        variant="outlined" onChange={this.handleChange}></TextField>
                    </Paper>
                    <Grid container direction="row" spacing={2}>
                        {
                            this.state.search.map( d => {
                                return <DScard name={d} />
                                })
                        }
                    </Grid>
                    </>
                )
        }
    }
}

export default DShome
