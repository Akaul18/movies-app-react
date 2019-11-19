import React, { Component } from 'react';
import './App.css';
// import Search from './components/Search';
import Axios from 'axios';
import SelectSearch from './components/SelectSearch';
import { Container, Grid, Button } from '@material-ui/core';
import TabContainer from './container/TabContainer';
import { BASE_URL_SEARCH, API_KEY } from './config/api_config';

class App extends Component{
    state = {
      searchValue:'',
      searchTypeValue:'',
      selectSearchOptions: [
        {
          id:0,
          option:"movie"
        },
        {
          id:1,
          option:"multi"
        },
        {
          id:2,
          option:"tv"
        }
      ],
      moviesDropdown: [
        {
          id:0,
          option:"now_playing"
        },
        {
          id:1,
          option:"popular"
        },
        {
          id:2,
          option:"top_rated"
        },
        {
          id:3,
          option:"upcoming"
        }
      ],
      tvDropdown: [
        {
          id:0,
          option:"airing_today"
        },
        {
          id:1,
          option:"on_the_air"
        },
        {
          id:2,
          option:"popular"
        },
        {
          id:3,
          option:"top_rated"
        }
      ],
      searchResults:[]
    }
    searchOptionSelected = searchTypeValue => {
      console.log(searchTypeValue)
      this.setState({
        searchTypeValue:searchTypeValue
      })
    }

    searchValue = (searchValue) => {
      console.log(searchValue);
      this.setState({
        searchValue:searchValue
      });
  }

  onSubmit = () => {
    // console.log('xyz');
      Axios.get(`${BASE_URL_SEARCH}${this.state.searchTypeValue}`,{
        params:{
          api_key: API_KEY,
          query: this.state.searchValue
        }
      }).then((res) => {console.log(res.data.results); this.setState({searchResults: res.data.results})}).catch(err => console.log(err));
  }

render(){
  // const classes = useStyles();
  // console.log(this.state.selectSearchOptions);
  return (
    <div className="App">
      <header className="header">
        <h1>React Movies App</h1>
      </header>
      <Grid container spacing={1} alignItems="center" style={{marginTop:'3.5rem', flexGrow:1}}>
        {/* <Grid item sm={6} style={{textAlign:'right'}}>
          <Search searchvalues={this.searchValues} />
        </Grid> */}
        
        <Grid item sm={8}>
          <SelectSearch
            selectSearchOptions={this.state.selectSearchOptions}
            searchOptionSelected={this.searchOptionSelected}
            searchValue={this.searchValue}
           />
        </Grid>

        <Grid item sm={4}>
          <Button variant="contained" color="primary" onClick={this.onSubmit}>
          SEARCH
          </Button>
        </Grid>
      </Grid>
      <Container className="Container" style={{width:"100%", margin:'3.5rem auto 0'}}>
        <TabContainer 
        moviesDropdown = {this.state.moviesDropdown}
        tvDropdown = {this.state.tvDropdown}
        searchResults = {this.state.searchResults}
        />
      </Container>
    </div>
  )
}
}

export default App;
