import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Box, TextField, Typography, Button, Card} from '@mui/material'
import { addPost } from '../../actions/post/post';
import { updateCoins } from '../../actions/auth/auth';

const PostForm = () => {

  const [post, setPost] = useState({
    title: '',
    desc: '',
    crop: '',
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

  const id = JSON.parse(localStorage.getItem('profile')).id;
  const coins = JSON.parse(localStorage.getItem('profile')).coins;

  const dispatch = useDispatch();


  let sum = 0;

  const updateCoinsValue = () => {
     sum = coins + 10;
  }

  console.log(id);

  const handleOnSubmit = (e) => {
    try{
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', post.title);
      formData.append('desc', post.desc);
      formData.append('crop', post.crop);
      dispatch(addPost(formData, id));
      dispatch(updateCoins(id));
    }catch(err){
      console.log(err);
    }
  };

  return (
    <Box>
      <Typography variant='subtitle' gutterBottom>
        Got Something to Share?
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 }  }}>
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            type="text"
            name="desc"
            value={post.desc}
            onChange={handleChange}
          />
          <TextField
            label="Crop"
            variant="outlined"
            fullWidth
            sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
            type="text"
            name="crop"
            value={post.crop}
            onChange={handleChange}
          />
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
