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
          url: '/dashboard/BlankPage'
        },
        {
          name: 'Java',
          icon: 'File',
          url:'/dashboard/apps/java'
        },
        {
          name: 'SQL',
          icon: 'File',
          url:'/dashboard/courses/sql',
          badge: {
            text: 'COMING SOON',
          },
        },
        {
          name: 'C',
          icon: 'File',
          url: '/dashboard/courses/c',
          badge: {
            text: 'COMING SOON',
          },
        },
      ],
    },
    {
      name: 'Profile',
      icon: 'File',
      url:'/dashboard/profile'
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
      component:Home,

    },
  ],
};
