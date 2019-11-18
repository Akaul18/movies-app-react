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

const SelectSearchTv = (props) => {
    // const { moviesDropdown, tvDropdown } = props;
    // console.log(props);
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
        <div style={{textAlign:'center'}}>

        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Category
            </InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            labelWidth={labelWidth}
            >
            {/* {(()=>{
                if(moviesDropdown) {
                    return <div>{moviesDropdown.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}</div>
                }else if(tvDropdown){
                    return <div>{tvDropdown.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}</div>
                }
            })()} */}
            {props.tvDropdown.map((options)=><MenuItem value={options.option} key={options.id}>{options.option}</MenuItem>)}
            </Select>
        </FormControl>
        </div>
    )
}

export default SelectSearchTv
