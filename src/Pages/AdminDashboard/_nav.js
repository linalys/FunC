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
      icon: 'Layers',
      children: [
        {
          name: 'C++',
          icon: 'File',
          url: '/dashboard/apps/cplusplus'
        },
        {
          name: 'Java',
          icon: 'File',
          url:'/dashboard/apps/java'
        },
        {
          name: 'SQL',
          icon: 'File',
          url:'/dashboard/apps/sql',
          badge: {
            text: 'COMING SOON',
          },
        },
        {
          name: 'C',
          icon: 'File',
          url: '/dashboard/apps/c',
          badge: {
            text: 'COMING SOON',
          },
        },
      ],
    },
    {
      name: 'Apps',
      icon: 'Cloud',
      children: [
        {
          name: 'Statistics',
          url: '/dashboard/apps/statistics',
        },
        {
          name: 'Contact Us',
          url: '/dashboard/apps/contactus',
        },
      ],
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
      name: 'Premium',
      url: '/dashboard/apps/premium',
      icon: 'Gift',
    },
    {
      name: 'Log Out',
      url: '/',
      icon: 'User',

    },
  ],
};
