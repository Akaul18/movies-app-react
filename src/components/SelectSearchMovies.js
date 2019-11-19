import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
// import { BASE_URL_MOVIE, BASE_URL_TV, BASE_URL_SEARCH, API_KEY } from '../config/api_config';

class SelectSearchMovies extends Component {
    state = {
        value:'',
        labelWidth:0,
        movies:[]
        // popularValues:[],
        // nowPlayingValues:[],
        // topRatedValues:[],
        // upcomingvalues:[]
    }
    

    handleChange = (e) =>{
        // console.log("value: "+e.target.value)
        this.setState({
            value:e.target.value,
        });
        this.props.getAllMovies(e.target.value);
    }

    render(){
        // console.log(this.props.selectOptions);
        return (
            <div style={{textAlign:'center'}}>
                <FormControl style={{minWidth: '140px',maxWidth: '60%'}}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    {this.props.selectOptions.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default SelectSearchMovies
