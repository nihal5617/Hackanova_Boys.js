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
  Grid,
} from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


const Education = () => {
  const data = [
   {
    src: "https://www.youtube.com/embed/mJwOr-pe_I8",
   },
    {
    src: "https://www.youtube.com/embed/T03nk2nmZ64",
    },
    {
    src: "https://www.youtube.com/embed/DoVGbPa0jHw",
    },
    {
    src: "https://www.youtube.com/embed/ouU8vCGxyqs",
    },
    {
    src: "https://www.youtube.com/embed/T5KhzfBAbzg",
    },
    {
    src: "https://www.youtube.com/embed/VOBwgDttas0",
    },
    {
    src: "https://www.youtube.com/embed/QvP2K0F6bEg",
    },
    {
    src: "https://www.youtube.com/embed/BAU08Pxg6SQ",
    },
    {

    src: "https://www.youtube.com/embed/6BxY_vTpTgc",
    },
    {
    src: "https://www.youtube.com/embed/mJwOr-pe_I8",
    },
    {
    src: "https://www.youtube.com/embed/XeNA6XdMoF8",
    },
    {
    src: "https://www.youtube.com/embed/ouU8vCGxyqs",
    },
  ]

  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const [prediction, setPrediction] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  console.log(image);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(image);
      const formData = new FormData();
      formData.append('image', image);
      const { data } = await axios.post('http://127.0.0.1:8000/predict', formData);
      console.log(data);
      setPrediction(data.Prediction);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(prediction);

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" sx={{color:'#fff'}}>
            Education
          </Typography>
        </Stack>
        <Grid container spacing={3}>
        {
            data.map((item, index) => {
                return (
                    <>
                    <Grid item xs={12} sm={6} xl={4} key={index}>
                        <Card sx={{p:2}}>
                            <iframe width="100%" height="315" src={item.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                        </Card>
                    </Grid>
                    </>
                )
            })
        }
        </Grid>
      </Container>
    </>
  );
};

export default Education;
