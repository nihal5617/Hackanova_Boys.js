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
import {images} from '../constants'

const data = [
  {
   "keys": "apple",
   "tips": "Different varieties of apples have different requirements for chill hours, which are the number of hours of winter temperatures below 45 degrees Fahrenheit that the tree needs to produce fruit. Be sure to choose a variety that is well-suited to your climate.The best time to plant an apple tree is in the fall or winter while the tree is dormant. This allows the tree to establish roots before the growing season begins."
  },
  {
   "keys": "banana",
   "tips": "Bananas need full sun and well-drained soil with a pH between 5.5 and 7.5. They also prefer a warm, humid climate.As bananas grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support."
  },
  {
   "keys": "blackgram",
   "tips": "Blackgram prefers well-drained soil with a pH between 6 and 7.5 and prefers a warm, humid climate. Blackgram is a legume, so it is important to prepare the soil by adding organic matter and incorporating it well into the soil to ensure good drainage and aeration. Blackgram should be sown at a depth of 1-2 inches and spaced 6-8 inches apart. Sow the seeds in rows, with the rows spaced 2-3 feet apart."
  },
  {
   "keys": "chickpea",
   "tips": "Chickpea prefers well-drained soil with a pH between 6 and 8 and prefers a cool climate. Chickpea is a legume, so it is important to prepare the soil by adding organic matter and incorporating it well into the soil to ensure good drainage and aeration.Chickpea should be sown at a depth of 1-2 inches and spaced 6-8 inches apart. Sow the seeds in rows, with the rows spaced 2-3 feet apart."
  },
  {
   "keys": "coconut",
   "tips": "Coconut palms prefer warm, tropical climates with temperatures between 75-90°F and need plenty of sunlight. They also require well-drained sandy soil with a pH between 5.5-7.5. As coconut palms grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support."
  },
  {
   "keys": "coffee",
   "tips": "Coffee prefers warm, tropical climates with temperatures between 60-70°F and needs plenty of sunlight. It also requires well-drained soil with a pH between 6-6.5. Coffee plants require partial shade, especially when they are young, to protect them from direct sunlight."
  },
  {
   "keys": "cotton",
   "tips": "Cotton prefers warm, sunny climates with temperatures between 60-95°F and needs well-drained soil with a pH between 6-7. As cotton plants grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support."
  },
  {
   "keys": "grapes",
   "tips": "Grapes need full sun and well-drained soil. Avoid planting in low-lying areas where frost can collect.Grapes need support to keep them upright and to prevent damage from wind. Use a trellis or arbor to provide support.Pruning grapes helps to control their size, shape, and promote healthy fruit production. Prune young grape vines to shape them and remove any damaged or diseased branches."
  },
  {
   "keys": "jute",
   "tips": "Jute prefers warm, humid climates with temperatures between 70-90°F and needs well-drained soil with a pH between 6-7.Jute seeds should be sown in rows, with the rows spaced 2-3 feet apart. Jute plants need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "kidney beans",
   "tips": "Kidney beans prefer well-drained soil with a pH between 6.0 and 7.5, and prefer a warm climate with temperatures between 60-85°F. Kidney beans should be sown in rows, with the rows spaced 2-3 feet apart. The seeds should be sown at a depth of 2 inches."
  },
  {
   "keys": "lentil",
   "tips": "Lentils prefer well-drained soil with a pH between 6.0 and 7.5, and prefer a cool climate with temperatures between 60-75°F. Lentils should be sown in rows, with the rows spaced 2-3 feet apart. The seeds should be sown at a depth of 1-2 inches."
  },
  {
   "keys": "maize",
   "tips": "Maize prefers well-drained soil with a pH between 6.0 and 7.0 and prefers a warm, sunny climate. Maize should be sown in rows, with the rows spaced 2-3 feet apart. The seeds should be sown at a depth of 1-2 inches. Maize needs consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "mango",
   "tips": " Mango trees prefer warm, tropical climates with temperatures between 60-100°F and need plenty of sunlight. They also require well-drained soil with a pH between 6-7.Mango trees need support to keep them upright and to prevent damage from wind. Mango trees need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "mothbean",
   "tips": " Mothbeans prefer well-drained soil with a pH between 6-7 and can tolerate a wide range of climates, including drought conditions.Mothbeans should be sown in rows, with the rows spaced 2-3 feet apart. The seeds should be sown at a depth of 1-2 inches.Mothbeans are drought-tolerant but need consistent moisture during the growing season."
  },
  {
   "keys": "mung",
   "tips": "Mung beans prefer well-drained soil with a pH between 6.0 and 7.5, and prefer a warm climate with temperatures between 60-85°F. Mung beans should be sown in rows, with the rows spaced 2-3 feet apart. The seeds should be sown at a depth of 1-2 inches.Mung beans need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "muskmelon",
   "tips": "Muskmelon prefers well-drained soil with a pH between 6.0 and 7.5 and a warm climate with temperatures between 60-85°F. As muskmelon plants grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support.Muskmelon plants need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "orange",
   "tips": "Oranges prefer well-drained soil with a pH between 6.0 and 7.5, and a warm, sunny climate with temperatures between 60-85°F. As orange trees grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support. Orange trees need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "papaya",
   "tips": "Papaya prefers well-drained soil with a pH between 6.0 and 7.5 and a warm, tropical climate with temperatures between 70-90°F. As papaya plants grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support.Papaya plants need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "pigeonpeas",
   "tips": "Pigeonpeas prefer well-drained soil with a pH between 6.0 and 7.5, and a warm, tropical climate with temperatures between 70-90°F. Pigeonpeas should be sown in rows, with the rows spaced 2-3 feet apart. The seeds should be sown at a depth of 1-2 inches.Pigeonpeas need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "pomegrante",
   "tips": "Pomegranate prefers well-drained soil with a pH between 6.0 and 7.5, and a warm, sunny climate with temperatures between 60-85°F. As pomegranate trees grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support. Pomegranate trees need consistent moisture and should be watered regularly, especially during dry periods."
  },
  {
   "keys": "rice ",
   "tips": "Rice prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Rice should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches."
  },
  {
   "keys": "watermelon",
   "tips": "Watermelon prefers well-drained soil with a pH between 6.0 and 7.5, and a warm climate with temperatures between 70-90°F. As watermelon plants grow, they can become top-heavy, so they need support to keep them upright. Use a stake or a trellis to provide support.Watermelon plants need consistent moisture and should be watered regularly, especially during dry periods."
  }
 ]

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
  const [crop, setCrop] = useState('');
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
      setCrop(data.crop)
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" sx={{color:'#fff'}}>
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
            helperText = "ratio of nitrogen content in the soil"
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
            helperText = "ratio of phosphorus content in the soil"
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
            helperText = "ratio of potassium content in the soil"
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
            helperText = "Temperature in degree celsius"
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
            helperText = "Relative humidity in %"
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
            helperText = "pH value of soil"
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
            helperText = "Rainfall in mm"
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
        {
         crop ? 
         <Card sx={{ p: 2, mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ mr: { md: 1 }, width:'100%', maxWidth:'250px' }}>
              {/* <img src={images.grape} alt="" height={250} width={250} style={{borderRadius:'5px'}}/> */}
              <img src={images[crop]} alt="" height={250} width={250} style={{borderRadius:'5px'}}/>
            </Box>
            <Box sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
              <Typography variant="h3" color="primary" >
                 Crop: {crop.charAt(0).toUpperCase() + crop.slice(1)}
              </Typography>
              <Typography variant="h6" color="primary" >
                {
                  crop === 'rice' ? 
                  "Rice prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Rice should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." : 
                  crop === 'maize' ? "Maize prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Maize should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'chickpea' ? "Chickpea prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Chickpea should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'kidneybeans' ? "Kidneybeans prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Kidneybeans should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'pigeonpeas' ? "Pigeonpeas prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Pigeonpeas should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'mothbeans' ? "Mothbeans prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Mothbeans should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'mungbean' ? "Mungbean prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Mungbean should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'blackgram' ? "Blackgram prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Blackgram should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'lentil' ? "Lentil prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Lentil should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'pomegranate' ? "Pomegranate prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Pomegranate should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'banana' ? "Banana prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Banana should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'mango' ? "Mango prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Mango should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'grapes' ? "Grapes prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Grapes should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'watermelon' ? "Watermelon prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Watermelon should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'muskmelon' ? "Muskmelon prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Muskmelon should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'apple' ? "Apple prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Apple should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'orange' ? "Orange prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Orange should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'papaya' ? "Papaya prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Papaya should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'coconut' ? "Coconut prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Coconut should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'cotton' ? "Cotton prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Cotton should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'jute' ? "Jute prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Jute should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." :
                  crop === 'coffee' ? "Coffee prefers well-drained soil with a pH between 6.0 and 7.5 and requires a lot of water to grow. It grows best in warm and humid climates. Coffee should be sown in rows, with the rows spaced 8-12 inches apart. The seeds should be sown at a depth of 2-3 inches." : null
                }
              </Typography>
              </Box>
          </Box>
        </Card>
        : null  
        }
      </Container>
    </>
  );
};

export default CropPrediction;
