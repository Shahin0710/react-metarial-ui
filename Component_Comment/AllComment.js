import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { SingleComment } from './SingleComment';
import { UpdateComment } from './UpdateComment';
import moment from 'moment';


export const AllComment = () => {

  const [open, setOpen] = React.useState(false);
  const [getId, setGetId] = React.useState();
  const handleView = (id) => {
    setGetId(id)
    setOpen(true);
  }

  const [Update, setUpdate] = React.useState(false);
  const handleUpdate = (id) => {
    setGetId(id)
    setUpdate(true);
  }

    const [comment, setComment] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get("http://api.dev.eschooljourney.com:8000/service_study_content/video_comment/all");
        setComment(result.data.reverse());
    }
  
    const handleDelete = async id => {
      await axios.delete(`http://api.dev.eschooljourney.com:8000/service_study_content/video_comment/delete/${id}`);
      alert("Delete Success");
      loadUsers();
    };
  
    useEffect(() => {
      loadUsers();
    }, []);

    
  return (
    
<>
<Box py={0} px={15}>
<TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.L</TableCell>
            <TableCell align="center">Video ID</TableCell>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Comment</TableCell>
            <TableCell align="center">Date & Time</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        comment.map((data, index) => (
          
          <TableRow>
          <TableCell component="th" scope="row">{index + 1}</TableCell>
          <TableCell align="center">{data.video_id}</TableCell>
          <TableCell align="center">{data.user_id}</TableCell>
          <TableCell align="center">{data.comment}</TableCell>
          <TableCell align="center">{data.datetime}</TableCell>
          <TableCell align="center">
          <Button onClick={() => handleView(data.id)}>
          <VisibilityIcon />
          </Button>
          <Button onClick={() => handleUpdate(data.id)}>
          <EditIcon />  
          </Button>
          <Button color="secondary" onClick={() => handleDelete(data.id)}>
            <DeleteIcon />
          </Button>
          </TableCell>
          </TableRow>
          
            ))
        }
        </TableBody>
      </Table>
    </TableContainer>       
    </Box>
    <SingleComment 
      open={open}
      setOpen={setOpen}
      getId={getId} 
    />
    <UpdateComment 
      Update={Update}
      setUpdate={setUpdate}
      getId={getId} 
    />
    </>

  )
}



