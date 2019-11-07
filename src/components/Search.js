import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField} from '@material-ui/core';

const getStyles = makeStyles(theme => ({
    textField: {
        // display: 'flex',
        // margin: theme.spacing.unit,
        width: '60%',
        margin:0
        // margin: '4rem auto 0'
      }
    })
)
const Search = () => {
    const classes = getStyles();
    return (
        // <div>
            <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />
        // </div>
    )
}

export default Search;
