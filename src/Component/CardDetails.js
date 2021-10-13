import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
//import { useState } from 'react';
//import axios from 'axios';


        const commonStyles = {
          pt: '1%',
          width: '100%',
          height: '32vh',
          bgcolor: '#903f99',
          color: 'white',
          textAlign: 'center',
          border: 3,
          borderColor: 'blue',
        };

        const Input = styled('input')({
          display: 'none',
        });




const CardDetails = () => {

// const [file, setFile] = useState("");
// const onInputChange = e => {

// };


//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("https://todo-app37.herokuapp.com/addTodo", file)
//     .then(result => {
//       alert("Success Uploaded")
//     })
//     .catch(error => {
//       alert("Please Full Fill")
//     } )
//   };



  return (
    <>
      <Box py={20} px={15}>
        <Box sx={{ ...commonStyles }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block' } }}
          >
            <CloudUploadRoundedIcon style={{ fontSize: 40 }} />
            <br />
            Drop Files Here
          </Typography>

          {/* <form onSubmit={e => onSubmit(e)}> */}
          <form>
            <Input
              type="file" 
              name="myFile"
              //onChange={e => onInputChange(e)}
              //value={}
              // accept="image/*" 
              // id="icon-button-file" 
            />
            <IconButton color="inherit" aria-label="upload picture" component="span">
              <UploadFileIcon style={{ fontSize: 70 }} />
            </IconButton>
          </form>
        </Box>

        <Box>
          <Grid container sx={{pt: '2%',}}>
            <Grid item xs={6}>
              <Button 
                variant="contained" 
                color="success" 
                sx={{mx:'3%'}}
                // onClick={onSubmit}
              >
                <FilterCenterFocusOutlinedIcon />
              </Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Button variant="contained" color="error" sx={{mx:'3%'}}>
                <DeleteOutlinedIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>

  )
}

export default CardDetails

