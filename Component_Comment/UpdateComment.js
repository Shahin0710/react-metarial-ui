import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from "axios";
import { useHistory } from "react-router-dom";


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

const Input = styled('input')({
    width: '80%',
    height: '5vh',
    marginBottom: '2vh',
    paddingBottom: '2vh',
});



export const UpdateComment = ({ Update, setUpdate, getId }) => {
    const handleClose = () => setUpdate(false);

    let history = useHistory();
    // const { id } = useParams();

    const [videoComment, setVideoComment] = React.useState({
        video_id: "",
        user_id: "",
        comment: "",
        datetime: ""
    });

    const { video_id, user_id, comment, datetime } = videoComment;
    const onInputChange = e => {
        setVideoComment({ ...videoComment, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (videoComment.video_id.length === 0 ||
            videoComment.user_id.length === 0 ||
            videoComment.comment.length === 0 ||
            videoComment.datetime.length === 0)
       {
       alert('Please fill all the input !');
       return false;
       }
        await axios.put(`http://api.dev.eschooljourney.com:8000/service_study_content/video_comment/update/${getId}`, videoComment);
        alert("Update Complete")
        setUpdate(false);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://api.dev.eschooljourney.com:8000/service_study_content/video_comment/one/${getId}`);
        setVideoComment(result.data);
    };

    React.useEffect(() => {
        loadUser();
    }, [getId]);



    return (
        <Modal
            open={Update}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h6" color="green" sx={{ mt: 0, textAlign: 'center' }}>
                    Update Comment
                </Typography>
                <Typography id="modal-modal-description" sx={{ m: 2 }}>
                    Previous Comment: {videoComment.comment}
                </Typography>
                <form onSubmit={e => onSubmit(e)}>
                    <Input
                        type="text"
                        placeholder="Video ID Input"
                        name="video_id"
                        value={video_id}
                        onChange={e => onInputChange(e)}
                    />
                    <Input
                        type="text"
                        placeholder="Write Comment"
                        name="user_id"
                        value={user_id}
                        onChange={e => onInputChange(e)}
                    />
                    <Input
                        type="text"
                        placeholder="Write Comment"
                        name="comment"
                        value={comment}
                        onChange={e => onInputChange(e)}
                    />
                    <Input
                        type="text"
                        placeholder="Write Comment"
                        name="datetime"
                        value={datetime}
                        onChange={e => onInputChange(e)}
                    />
                    <Grid container sx={{ m: '3%' }}>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ m: '2%' }}
                            onClick={onSubmit}
                        >
                            <AddIcon />
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ m: '2%', }}
                            onClick={handleClose}
                        >
                            <HighlightOffIcon />
                        </Button>
                    </Grid>
                </form>
            </Box>
        </Modal>

    )
}


