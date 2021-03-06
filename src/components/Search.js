import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';

class Search extends Component{

    state={
        title:''
    }

    handleChange = (e) =>{
        this.setState({title:e.target.value});
        this.props.searchValue(e.target.value);
    }
    render(){
        
        return (
                <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                style={textField}
                margin="normal"
                variant="outlined"
                value={this.state.title}
                onChange={this.handleChange}
                />
        )           
    }
}

const textField = {
    width:'40%',
    marginTop:'0.5rem'
}

export default Search;
