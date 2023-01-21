import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Tab,
  Tabs,
  Modal,
  IconButton,
  CardActionArea,
} from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../actions/post/post';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Post = () => {

  const {id} = useParams();

  const [comment, setComment] = useState({
    comment: '',
  });

  console.log(id);

  const posts = useSelector((state) => state.post.posts);
  const post = posts.find((post) => post._id === id);
  console.log(post);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
    };

  const user = JSON.parse(localStorage.getItem('profile')).id;

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const commentData = {
            comment: comment.comment,
            id,
        }
        dispatch(addComment(commentData, user));
    }catch(err){
      console.log(err)
    }
  };

  if(!post) return <div>Loading...</div>
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Post
          </Typography>
        </Stack>
        <Card sx={{ p: 2, maxWidth:'850px', m:'auto' }}>
            <Box sx={{ display:'flex', flexDirection:{xs:'column', sm:'row'} }}>
                <Box sx={{ display:'flex', flexDirection:'column', width:{xs:'100%'}, mr:1,  maxWidth:'350px' }}>
                    <img src={post.image} alt="" height={250} style={{borderRadius:'5px',}}/>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', width:'100%', ml:{sm:1}, mt:{xs:2, sm:0} }}>
                    <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', mb:1}}>
                        <Avatar sx={{mr:1}}>{post.name[0]}</Avatar>
                            <Typography variant="h5" sx={{ml:1}}>
                        {post.name}
                    </Typography>
                    </Box>

                    <Typography variant="h3" gutterBottom>
                        Title: {post.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{textJustify:'center', textAlign:'justify'}}>
                        Desc: {post.desc}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        DateTime: {post.date.slice(0,10)} {post.date.slice(11,16)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Likes: {post.likes.length}
                    </Typography>
                </Box>
            </Box>
        </Card>
        <Card sx={{  p: 2, maxWidth:'850px', m:'auto', mt: 2 }}>
            <form onSubmit={handleSubmit}>
            <Box sx={{ display:'flex', flexDirection:'row', width:'100%', mt:{xs:2, sm:0} }}>
                <TextField
                    fullWidth
                    label="Comment"
                    name="comment"
                    onChange={handleChange}
                    required
                    type="text"
                    variant="outlined"
                />
                <Button
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Comment
                </Button>
            </Box>
            </form>
        </Card>
        <Card sx={{  p: 2, maxWidth:'850px', m:'auto', mt:2 }}>
            <Box sx={{ display:'flex', flexDirection:'column', width:'100%', ml:{sm:1}, mt:{xs:2, sm:0} }}>
                <Typography variant="h7" gutterBottom>
                    {post.comments.length} Comments
                </Typography>
                {post.comments ? post.comments.map((comment) => (
                    <Card sx={{ mt:2, p: 2, maxWidth:'850px' }}>
                        <Box sx={{ display:'flex', flexDirection:'row', width:'100%', ml:{sm:1}, mt:{xs:2, sm:0} }}>
                            <Avatar sx={{mr:1}}>{comment.name[0]}</Avatar>
                            <Typography variant="h5" sx={{ml:1}}>
                                {comment.name}
                            </Typography>
                        </Box>
                        <Typography variant="body1" gutterBottom sx={{textJustify:'center', textAlign:'justify'}}>
                            {comment.comment}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            DateTime: {comment.date.slice(0,10)} {comment.date.slice(11,16)}
                        </Typography>
                    </Card>
                )) : null}
            </Box>
        </Card>
      </Container>
    </>
  );
};

export default Post;
