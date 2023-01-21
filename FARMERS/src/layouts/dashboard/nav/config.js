// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'community',
    path: '/dashboard/community',
    icon: icon('eva:file-text-fill'),
  },
  {
    title: 'weather',
    path: '/dashboard/weather',
    icon: icon('eva:file-text-fill'),
  },
  {
    title: 'disease control',
    path: '/dashboard/disease',
    icon: icon('eva:file-text-fill'),
  },
  {
    title: 'crop prediction',
    path: '/dashboard/crop-prediction',
    icon: icon('eva:file-text-fill'),
  },
  {
    title: 'education',
    path: '/dashboard/education',
    icon: icon('eva:file-text-fill'),
  },
  {
    title: 'government schemes',
    path: '/dashboard/government',
    icon: icon('eva:file-text-fill'),
  },
  {
    title: 'settings',
    path: '/dashboard/settings',
    icon: icon('ic_lock'),
  }
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
