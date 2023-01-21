import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card } from '@mui/material';
// components
import Chatbot from '../components/chatbot/chatbot';
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import {images} from '../constants'

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5, color:'#fff' }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Card sx={{ borderRadius:'50%'}}>
            <img src={images.icon1} alt="icon1" />
            </Card>
            <Typography variant="h4" sx={{color:'#fff', mt:2}}>
              Crop Disease Detection
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Card sx={{ borderRadius:'50%'}}>
          <img src={images.icon2} alt="icon2" />
          </Card>
            <Typography variant="h4" sx={{color:'#fff', mt:2}}>
              Weather & All API Support
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Card sx={{ borderRadius:'50%'}}>
          <img src={images.icon3} alt="icon3" />
          </Card>
            <Typography variant="h4" sx={{color:'#fff', mt:2}}>
              Irrigation & Modern Farming
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Card sx={{ borderRadius:'50%'}}>
          <img src={images.icon4} alt="icon4" />
          </Card>
            <Typography variant="h4" sx={{color:'#fff', mt:2}}>
              Cross Platform Application
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Recent Revenues"
              subheader="(+23%) than last year"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: 'grain',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'rice',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'potato',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Sales by Crop"
              chartData={[
                { label: 'grain', value: 4344 },
                { label: 'rice', value: 5435 },
                { label: 'potato', value: 1443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
        <Chatbot/>
      </Container>
    </>
  );
}
