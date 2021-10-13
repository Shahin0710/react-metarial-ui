import React from 'react'
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";
import AllTopBar from './AllTopBar';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 0,
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1.15),
    },
    marginRight: theme.spacing(18),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  }));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'primary',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(6)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
}));



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



const SearchTopBar = () => {
    const classes = useStyles();

    return (
        <>
        <Search>
        <AllTopBar />
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
        <Button className={classes.root}>
        <SearchIcon />
        </Button>
        </Search>
        </>
    )
}

export default SearchTopBar
