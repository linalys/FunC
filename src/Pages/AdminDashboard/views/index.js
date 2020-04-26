import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import BlankPage from './pages/BlankPage';
import ErrorPage from './pages/404';

import Cplusplus from "./pages/Cplusplus";
import C from "./pages/C";
import SQL from "./pages/SQL";
import EditLesson from "./pages/EditLesson";
import AddLesson from "./pages/AddLesson";
import DeleteLesson from "./pages/DeleteLesson";
import Profile from "./pages/Profile";
import Java from "./pages/Java";
import LogOut from "./pages/LogOut";

const pageList = [
  {
    name: 'Dashboard',
    path: '/dashboard/home',
    component: Dashboard,
  },
  {
    name: 'Profile',
    path: '/dashboard/profile',
    component: Profile,
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
    name: 'C',
    path: '/dashboard/apps/c',
    component: C,
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
    name: 'SQL',
    path: '/dashboard/apps/sql',
    component: SQL,
  },

  {
    name: 'Edit A Lesson',
    path: '/dashboard/edit/editlesson',
    component: EditLesson,
  },
  {
    name: 'Add A Lesson',
    path: '/dashboard/edit/addlesson',
    component: AddLesson,
  },
  {
    name: 'Delete A Lesson',
    path: '/dashboard/edit/deletelesson',
    component: DeleteLesson,
  },
  {
    name: 'Log Out',
    path: '/dashboard/logout',
    component: LogOut
  }
];

export default pageList;
