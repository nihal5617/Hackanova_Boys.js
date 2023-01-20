import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
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

const CropPrediction = () => {
  const [conditions, setConditions] = useState({
    n:'',
    p:'',
    k:'',
    temp:'',
    hum:'',
    ph:'',
    rain:'',
  });

  const handleChange = ({ currentTarget: input }) => {
    setConditions({
      ...conditions,
      [input.name]: input.value,
    });
    console.log(conditions);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log(conditions)
      const {data} = await axios.post('http://127.0.0.1:8000/recommend', conditions)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Crop Recommendation
          </Typography>
        </Stack>
        <Card sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Nitrogen"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="n"
            value={conditions.n}
            onChange={handleChange}
          />
            <TextField
            label="Phosphorus"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="p"
            value={conditions.p}
            onChange={handleChange}
            />
          </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
            label="Potassium"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="k"
            value={conditions.k}
            onChange={handleChange}
            />
            <TextField
            label="Temperature"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="temp"
            value={conditions.temp}
            onChange={handleChange}
            />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
            label="Humidity"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="hum"
            value={conditions.hum}
            onChange={handleChange}
            />
            <TextField
            label="PH"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="ph"
            value={conditions.ph}
            onChange={handleChange}
            />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
            label="Rainfall"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="rain"
            value={conditions.rain}
            onChange={handleChange}
            />
            <Box sx={{ ml: { md: 1 }, width:'100%'}}/>
            </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default CropPrediction;
