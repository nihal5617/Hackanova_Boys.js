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


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Post = () => {

  const {id} = useParams();

  console.log(id);

  const dispatch = useDispatch();

  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  console.log(image);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log(image)
      const formData = new FormData();
      formData.append("image", image);
      // dispatch(diseaseControl(formData));
      const {data} = await axios.post("http://127.0.0.1:8000/predict", formData);
      console.log(data);
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            
          </Typography>
        </Stack>
        <Card sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { sm: 1 } }}>
              <Button
                variant="outlined"
                fullWidth
                component="label"
                style={{ height: '37px' }}
                value={image}
                onChange={(e) => handleImageFile(e)}
              >
                Upload Crop Image
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
            <Box sx={{ width: '100%', ml: { sm: 1 } }}/>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
          </form>
          <CardActionArea>
          <img
            width="100%"
            // className={classes.media}
            src={url}
            alt="Lance"
          />
        </CardActionArea>
        </Card>

      </Container>
    </>
  );
};

export default Post;
