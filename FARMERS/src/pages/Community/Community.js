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
} from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post';
import PostForm from './PostForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 1,
  p: 2,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Community = () => {
  const [conditions, setConditions] = useState({
    n: '',
    p: '',
    k: '',
    temp: '',
    hum: '',
    ph: '',
    rain: '',
  });

  // _id, text, name, avatar, user, likes, comments, date4

  const posts = [
    {
      id: 1,
      user: 1,
      title: 'Title 1',
      desc: 'Desc 1',
      name: 'Test Wadke',
      image: 'https://avatars.githubusercontent.com/pratikwadke02?s=200',
      comments: [],
      likes: [],
      date: '2023-01-20T05:11:48.447Z',
    },
  ];

  const postsData = useSelector((state) => state.post.posts);
  console.log(postsData);

  const handleChange = ({ currentTarget: input }) => {
    setConditions({
      ...conditions,
      [input.name]: input.value,
    });
    console.log(conditions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(conditions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Community Forum
          </Typography>
        </Stack>
        <Card sx={{ p: 2 }}>
      <PostForm />
        </Card>
        <Post posts={posts} />
      </Container>
    </>
  );
};

export default Community;
