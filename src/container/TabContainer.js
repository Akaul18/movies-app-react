import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MoviesContainer from './MoviesContainer';
import SearchContainer from './SearchContainer';
import TvShowContainer from './TvShowContainer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: '100%',
    maxWidth: '100%',
    border: '1px solid black'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  }
}));

const TabContainer = (props) => {
  const { moviesDropdown, tvDropdown, searchResults } = props
  // console.log(props.moviesDropdown);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = index => {
      setValue(index);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="MOVIES" {...a11yProps(0)} />
            <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
            <Tab label="TV SHOWS" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* <SelectSearchMovies moviesDropdown ={moviesDropdown} /> */}
            <MoviesContainer moviesDropdown ={moviesDropdown} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SearchContainer searchResults={searchResults} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* <SelectSearchTv tvDropdown ={tvDropdown} /> */}
            <TvShowContainer tvDropdown ={tvDropdown} />
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }

export default TabContainer;