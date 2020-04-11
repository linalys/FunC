import Dashboard from './pages/Dashboard';
import Premium from './pages/Premium';
import Statistics from './pages/Statistics';
import ContactPage from './pages/ContactUs';
import BlankPage from './pages/BlankPage';
import ErrorPage from './pages/404';
import Java from './pages/Java';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'Blank',
    path: '/pages/blank',
    component: BlankPage,
  },
  {
    name: '404',
    path: '/pages/404',
    component: ErrorPage,
  },
  {
    name: 'Statistics',
    path: '/apps/statistics',
    component: Statistics,
  },
  {
    name: 'Premium',
    path: '/apps/premium',
    component: Premium,
  },
  {
    name: 'Contact Us',
    path: '/apps/contactus',
    component: ContactPage,
  },
  {
    name: 'Java',
    path: '/apps/java',
    component: Java,
  }


];

export default pageList;
