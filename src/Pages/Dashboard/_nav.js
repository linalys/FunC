import BlankPage from './views/pages/BlankPage';

export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      name: 'Courses',
      icon: 'Layers',
      children: [
        {
          name: 'C',
          icon: 'File',
          url: '/courses/c'
        },
        {
          name: 'C++',
          icon: 'File',
          url: '/BlankPage'
        },
        {
          name: 'Java',
          icon: 'File',
          url:'/apps/java'
        },
        {
          name: 'SQL',
          icon: 'File',
          url:'/courses/sql'
        }
      ],
    },
    {
      name: 'Profile',
      icon: 'File',
      url:'/profile'
    },
    {
      name: 'Apps',
      icon: 'Cloud',
      children: [
        {
          name: 'Statistics',
          url: '/apps/statistics',
        },
        {
          name: 'Contact Us',
          url: '/apps/contactus',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'Bell',
      badge: {
        text: 'NEW',
      },
    },
  ],
  bottom: [
    {
      name: 'Premium',
      url: '/apps/premium',
      icon: 'Gift',
    },
    {
      name: 'Log Out',
      url: '/404',
      icon: 'User',
    },
  ],
};
