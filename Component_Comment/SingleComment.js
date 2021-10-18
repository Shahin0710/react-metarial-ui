import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from "axios";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const SingleComment = ({ open, setOpen, getId }) => {
    const handleClose = () => setOpen(false);
    const [comment, setComment] = React.useState([]);
    
    const loadUser = async () => {
        const result = await axios.get(`http://api.dev.eschooljourney.com:8000/service_study_content/video_comment/one/${getId}`);
      setComment(result.data);
      };

      React.useEffect(() => {
        loadUser();
      }, [getId]);

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Video ID:  {comment.video_id}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                User ID: {comment.user_id}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Comment: {comment.comment}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Date & Time: {comment.datetime}
                </Typography>

                <Button
                    variant="contained"
                    color="error"
                    sx={{ mt: '4%', }}
                    onClick={handleClose}
                >
                    <HighlightOffIcon />
                </Button>
            </Box>
        </Modal>
    )
}


