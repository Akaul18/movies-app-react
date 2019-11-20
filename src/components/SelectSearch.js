import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: '60%',
      textAlign: 'center'
  }
}));

const SelectSearch = ({ selectSearchOptions,searchOptionSelected, searchValue }) => {
  
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
        searchOptionSelected(event.target.value);
    };

    return (
        <div style={{textAlign:'right'}}>
            <Search searchValue={searchValue} />
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
                {selectSearchOptions.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectSearch
