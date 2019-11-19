import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import Search from './Search';

const formControl = {
            margin: '0.5rem',
            minWidth: 200,
            maxWidth: '60%',
            textAlign: 'center'
        }

class SelectSearch extends Component{
    state = {
        value:'',
        labelWidth:0
    }
    // console.log(props);
    // const classes = getStyles();
    // const [age, setAge] = React.useState('');

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    handleChange = event => {
        // setAge(event.target.value);
        this.setState({
            value:event.target.value
        })

        this.props.searchOptionSelected(event.target.value);
    };

    render(){
    return (
        <div style={{textAlign:'right'}}>
            <Search searchValue={this.props.searchValue} />
            <FormControl variant="outlined" style={formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                Search Type
                </InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.value}
                onChange={this.handleChange}
                // labelWidth={labelWidth}
                >
                {this.props.selectSearchOptions.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}
                </Select>
            </FormControl>
            {/* <Button variant="contained" color="primary" style={{marginTop:'1.1rem'}}>
             SEARCH
            </Button> */}
        </div>
    )
    }
}

export default SelectSearch
