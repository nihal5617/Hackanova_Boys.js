import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Community from './pages/Community/Community';
import Weather from './pages/Weather';
import Disease from './pages/Disease/Disease';
import Settings from './pages/Settings';
import CropPrediction from './pages/CropPrediction';
import Register from './pages/Register';
import Post from './pages/Post'
import Education from './pages/Education'

// ----------------------------------------------------------------------
const user = (JSON.parse(localStorage.getItem('profile')));

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'community', element: <Community /> },
        { path: 'weather', element: <Weather /> },
        { path: 'disease', element: <Disease /> },
        { path: 'settings', element: <Settings /> },
        { path: 'crop-prediction', element: <CropPrediction />},
        { path: 'post/:id', element: <Post />},
        { path: 'education', element: <Education />}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: '/', element: user ? <Navigate to="/dashboard/app" /> : <Navigate to="/login" /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
