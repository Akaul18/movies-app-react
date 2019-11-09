import React from 'react';
import './App.css';
import Search from './components/Search';
import SelectSearch from './components/SelectSearch';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TabContainer from './container/TabContainer';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '3.5rem',
    flexGrow: 1
    // textAlign: 'center'
  }
}))

const App = () => {
const classes = useStyles();
  return (
    <div className="App">
      <header className="header">
        <h1>React Movies App</h1>
      </header>
      <Grid container spacing={1} alignItems="center" className={classes.root}>
        <Grid item sm={6} style={{textAlign:'right'}}>
          <Search />
        </Grid>
        
        <Grid item sm={2} style={{textAlign:'center'}}>
          <SelectSearch />
        </Grid>

        <Grid item sm={4}>
          <Button variant="contained" color="primary">
          SEARCH
          </Button>
        </Grid>
      </Grid>
      <Container className="Container" style={{width:"100%", margin:'3.5rem auto 0'}}>
        <TabContainer />
      </Container>
    </div>
  )
}

export default App;
