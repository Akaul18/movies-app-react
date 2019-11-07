import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

const getStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 140,
            maxWidth: '60%'
        }
    })
)

const SelectSearch = () => {
    const classes = getStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <div>

        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Search Type
            </InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            labelWidth={labelWidth}
            >
            <MenuItem value={10}>Movie</MenuItem>
            <MenuItem value={20}>Multi</MenuItem>
            <MenuItem value={30}>Tv</MenuItem>
            </Select>
        </FormControl>
        </div>
    )
}

export default SelectSearch
