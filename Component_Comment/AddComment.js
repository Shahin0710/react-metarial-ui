import React, { useState } from "react";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";


// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px


const commonStyles = {
    pt: '1%',
    width: '100%',
    height: { xs: '200px', sm: '200px', md: '200px', lg: '300px' },
    bgcolor: '#222324',
    color: 'white',
    textAlign: 'center',
    border: 3,
    borderColor: 'blue',
};

const Input = styled('input')({
    width: '80%',
    height: '5vh',
    marginBottom: '2vh',
    paddingLeft: '1vh',
    paddingRight: '1vh',
});


export const AddComment = () => {


    const [videoComment, setVideoComment] = useState({
        video_id: "",
        user_id: "",
        comment: "",
        datetime: ""
    });

    const handleClear = () => {
        setVideoComment({ ...videoComment });
        history.push("/");
    };

    const { video_id, user_id, comment, datetime } = videoComment;
    const onInputChange = e => {
        setVideoComment({ ...videoComment, [e.target.name]: e.target.value });
    };

    let history = useHistory();

    //New Data Add Action
    const onSubmit = async e => {
        e.preventDefault();
        if (videoComment.video_id.length === 0 ||
            videoComment.user_id.length === 0 ||
            videoComment.comment.length === 0 ||
            videoComment.datetime.length === 0) {
            alert('Please fill all the input !');
            return false;
        }
        await axios.post("http://api.dev.eschooljourney.com:8000/service_study_content/video_comment/create", videoComment)
            .then(result => {
                alert("Add New Comment")
                setVideoComment({ ...videoComment });
                history.push("/");
            })
            .catch(error => {
                alert("Some Error")
            })
    };


    return (
        <>
            <Box py={20} px={15}>
                <Box sx={{ ...commonStyles }}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ display: { sm: 'block' }, py: '2%' }}
                    >
                        Create New Comment
                    </Typography>
                    <form onSubmit={e => onSubmit(e)}>
                        <Input
                            type="text"
                            placeholder="Enter Video ID"
                            name="video_id"
                            value={video_id}
                            onChange={e => onInputChange(e)}
                        />
                        <Input
                            type="text"
                            placeholder="Enter User ID"
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
                            placeholder="Date Time"
                            name="datetime"
                            value={datetime}
                            onChange={e => onInputChange(e)}
                        />
                    </form>
                </Box>
                <Grid container sx={{ mt: '3%' }}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mx: '0%' }}
                            onClick={onSubmit}
                        >
                            ADD NEW <AddIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ mx: '0%', }}
                            onClick={handleClear}
                        >
                            CLEAR <ClearIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}


