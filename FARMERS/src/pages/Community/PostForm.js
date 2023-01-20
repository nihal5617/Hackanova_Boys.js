import { useState } from 'react';
import {Box, TextField, Typography, Button, Card} from '@mui/material'
import { addPost } from '../../actions/post/post';

const PostForm = ({ addPost }) => {

  const [post, setPost] = useState({
    title: '',
    desc: '',
  });

  const [image, setImage] = useState(null);

  const handleImageFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = ({ currentTarget: input }) => {
    setPost({
      ...post,
      [input.name]: input.value,
    });
    console.log(post);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <Box>
      <Typography variant='subtitle' gutterBottom>
        Add New Post
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, md: 0 }  }}>
              <Button
                variant="outlined"
                fullWidth
                component="label"
                style={{ height: '50px' }}
                value={image}
                onChange={(e) => handleImageFile(e)}
              >
                {image ? image.name : 'Upload Image'}
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="desc"
            value={post.desc}
            onChange={handleChange}
          />
          <Box sx={{width: '100%', ml: { sm: 1 }  }}/>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            ADD POST
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PostForm;
