import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import BlankPage from './pages/BlankPage';
import ErrorPage from './pages/404';
import Java from "./pages/Java";
import Cplusplus from "./pages/Cplusplus";
import C from "./pages/C";
import SQL from "./pages/SQL";
import EditLesson from "./pages/EditLesson";
import AddLesson from "./pages/AddLesson";
import DeleteLesson from "./pages/DeleteLesson";
import Home from "../../Home/Home";

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
    name: 'C',
    path: '/dashboard/apps/c',
    component: C,
  },
  {
    name: 'SQL',
    path: '/dashboard/apps/sql',
    component: SQL,
  },
  {
    name: 'Edit A Lesson',
    url: '/dashboard/apps/editlesson',
    component: EditLesson,
  },
  {
    name: 'Add A Lesson',
    url: '/dashboard/apps/addlesson',
    component: AddLesson,
  },
  {
    name: 'Delete A Lesson',
    url: '/dashboard/apps/deletelesson',
    component: DeleteLesson,
  },
  {
    name: 'Log Out',
    path: '/home',
    component: Home,
  },
];

export default pageList;
