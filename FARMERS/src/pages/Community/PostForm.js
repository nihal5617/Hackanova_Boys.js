import { useState } from 'react';
import {Box, TextField, Typography} from '@mui/material'
import { addPost } from '../../actions/post/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');


  const handleChange = ({ currentTarget: input }) => {
    setConditions({
      ...conditions,
      [input.name]: input.value,
    });
    console.log(conditions);
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText('');
  };

  return (
    <Box>
      <Typography variant='subtitle' gutterBottom>
        Add New Post
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="title"
            value={text}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="desc"
            value={text}
            
        </Box>

      </form>
    </Box>
  );
};

export default PostForm;
