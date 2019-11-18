import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SelectSearch from './components/SelectSearch';
import { Container, Grid, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import TabContainer from './container/TabContainer';

class App extends Component{
    state = {
      selectSearchOptions: [
        {
          id:0,
          option:"Movie"
        },
        {
          id:1,
          option:"Multi"
        },
        {
          id:2,
          option:"Tv"
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
      ]
    }
  // }

render(){
  // const classes = useStyles();
  // console.log(this.state.selectSearchOptions);
  return (
    <div className="App">
      <header className="header">
        <h1>React Movies App</h1>
      </header>
      <Grid container spacing={1} alignItems="center" style={{marginTop:'3.5rem', flexGrow:1}}>
      {/* <Grid container spacing={1} alignItems="center" className={classes.root}> */}
        <Grid item sm={6} style={{textAlign:'right'}}>
          <Search />
        </Grid>
        
        <Grid item sm={2} style={{textAlign:'center'}} >
          <SelectSearch
            selectSearchOptions={this.state.selectSearchOptions}
           />
        </Grid>

        <Grid item sm={4}>
          <Button variant="contained" color="primary">
          SEARCH
          </Button>
        </Grid>
      </Grid>
      <Container className="Container" style={{width:"100%", margin:'3.5rem auto 0'}}>
        <TabContainer 
        moviesDropdown = {this.state.moviesDropdown}
        tvDropdown = {this.state.tvDropdown}
        />
      </Container>
    </div>
  )
}
}

export default App;
