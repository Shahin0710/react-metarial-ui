import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #e60e6f 30%, #e60e6f 90%)',
      border: 0,
      borderRadius: 0,
      color: 'white',
      height: 39,
      position: 'fixed',
    },
  });



const AllTopBar = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <FormControl variant="filled">
        <Select
          className={classes.root}
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    )
}

export default AllTopBar




