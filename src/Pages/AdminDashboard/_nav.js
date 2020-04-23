import BlankPage from './views/pages/BlankPage';
import Home from "../Home/Home";

export default {
  top: [
    {
      name: 'Home',
      url: '/dashboard/home',
      icon: 'Home',
    },
    {
      name: 'Courses',
      icon: 'Book',
      children: [
        {
          name: 'C++',
          icon: 'Arrow',
          url: '/dashboard/apps/cplusplus'
        },
        {
          name: 'Java',
          icon: 'Arrow',
          url:'/dashboard/apps/java'
        },
        {
          name: 'SQL',
          icon: 'Arrow',
          url:'/dashboard/apps/sql',
          badge: {
            text: 'COMING SOON',
          },
        },
        {
          name: 'C',
          icon: 'Arrow',
          url: '/dashboard/apps/c',
          badge: {
            text: 'COMING SOON',
          },
        },
      ],
    },
    {
       name: 'Statistics',
       url: '/dashboard/apps/statistics',
      icon:'Heart',
    },
    {
      divider: true,
    },
    {
      name: 'Lessons',
      icon: 'Cloud',
      children: [
        {
          name: 'Edit A Lesson',
          url: '/dashboard/apps/editlesson',
        },
        {
          name: 'Add A Lesson',
          url: '/dashboard/apps/addlesson',
        },
        {
          name: 'Delete A Lesson',
          url: '/dashboard/apps/deletelesson',
        },
      ],
    },
  ],

  bottom: [
    {
      name: 'Log Out',
      url: '/home',
      icon: 'User',

    },
  ],
};
