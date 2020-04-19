import Dashboard from './pages/Dashboard';
import Premium from './pages/Premium';
import Statistics from './pages/Statistics';
import ContactPage from './pages/ContactUs';
import BlankPage from './pages/BlankPage';
import ErrorPage from './pages/404';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/dashboard/home',
    component: Dashboard,
  },
  {
    name: 'Blank',
    path: '/dashboard/pages/blank',
    component: BlankPage,
  },
  {
    name: '404',
    path: '/dashboard/pages/404',
    component: ErrorPage,
  },
  {
    name: 'Statistics',
    path: '/dashboard/apps/statistics',
    component: Statistics,
  },
  {
    name: 'Premium',
    path: '/dashboard/apps/premium',
    component: Premium,
  },
  {
    name: 'Contact Us',
    path: '/dashboard/apps/contactus',
    component: ContactPage,
  },
  {
    name: 'Java',
    path: '/dashboard/apps/java',
  }


];

export default pageList;
