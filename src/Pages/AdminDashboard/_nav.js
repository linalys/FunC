
import Home from "../Home/Home";

export default {
    top: [
        {
            name: 'Home',
            url: '/dashboard/home',
            icon: 'Home',
        },
        {
            name: 'Profile',
            url: '/dashboard/profile',
            icon: 'User'
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
                    url: '/dashboard/apps/java'
                },
                {
                    name: 'SQL',
                    icon: 'Arrow',
                    url: '/dashboard/apps/sql',
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
            icon: 'Heart',
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
                    url: '/dashboard/edit/editlesson',
                },
                {
                    name: 'Add A Lesson',
                    url: '/dashboard/edit/addlesson',
                },
                {
                    name: 'Delete A Lesson',
                    url: '/dashboard/edit/deletelesson',
                }
            ]
        }
    ],

    bottom: [
        {
            name: 'Log Out',
            url: '/dashboard/logout',
            icon: 'User',
        }
    ]
};
