import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 140,
        maxWidth: '60%'
    }
}));

const SelectSearchTv = ({getAllTv, tvOptions }) => {
  
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
        getAllTv(event.target.value);
    };

    return (
        <div style={{textAlign:'center'}}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Category
                </InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                labelWidth={labelWidth}
                >
                {tvOptions.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectSearchTv
