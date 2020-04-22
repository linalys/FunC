import Dashboard from './pages/Dashboard';
import Premium from './pages/Premium';
import Statistics from './pages/Statistics';
import ContactPage from './pages/ContactUs';
import BlankPage from './pages/BlankPage';
import ErrorPage from './pages/404';
import Home from "../../Home/Home";
import Java from "./pages/Java";
import Cplusplus from "./pages/Cplusplus";

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
    component: Java,
  },
  {
    name: 'C++',
    path: '/dashboard/apps/cplusplus',
    component: Cplusplus,
  },
  {
    name: 'Log Out',
    path: '/',
  }


];

export default pageList;
