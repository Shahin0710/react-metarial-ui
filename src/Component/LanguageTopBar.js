import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #222324 30%, #222324 90%)',
      color: 'white',
      height: 25,
    },
  });

const LanguageTopBar = () => {
  const classes = useStyles();
    return (
    <Box>
      <FormControl>
        <NativeSelect
          className={classes.root}
          defaultValue={20}
        >
          <option value={10}>English</option>
          <option value={20}>Bangla</option>
        </NativeSelect>
      </FormControl>
    </Box>             
    )
}

export default LanguageTopBar




