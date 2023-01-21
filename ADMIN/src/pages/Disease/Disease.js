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
import { diseaseControl } from '../../actions/diseaseControl/diseaseControl';
import Prediction from './Prediction';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   width: '100%',
//   transform: 'translate(-50%, -50%)',
//   maxWidth: 800,
//   bgcolor: 'background.paper',
//   // border: '2px solid #000',
//   boxShadow: 1,
//   p: 2,
// };

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 2 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Disease = () => {
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
          <Typography variant="h4" gutterBottom>
            Disease Control
          </Typography>
        </Stack>
        <Card sx={{ p: 2 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2, height:'200px' }}>
              <Box sx={{ width: '100%', mr: { sm: 1 }, border: '1px solid lightgrey', borderRadius: '5px' }}>
                <img width="100%" src={url} alt="Accepted file types: jpg, png, jpeg." style={{borderRadius:'5px'}}/>
              </Box>
              <Box sx={{ width: '100%', ml: { sm: 1 }, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }} >
              <Box sx={{ width: '100%' }}>
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
              <Box sx={{ width: '100%', mt:2 }}>
                <Button variant="contained" fullWidth type="submit" style={{height:'40px'}}>
                  Predict
                </Button>
              </Box>
            </Box>
            </Box>
          </form>
        </Card>
        <Box sx={{ mt: 2 }}>
           { prediction ? <Prediction crop={prediction.Crop} cause={prediction.Cause} treatment={prediction.Treatment} disease={prediction.Disease} /> : null }
        </Box>
      </Container>
    </>
  );
};

export default Disease;
