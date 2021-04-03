import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default createStore({
    state() {
        return {
            theme: 'purple',
            projects: [
                {
                    name: 'ECommerce Shop',
                    premium: true,
                    projectImage: "ecommerce2",
                    projectHeaderImage: "ecommerce2header",
                    height: false,
                    home: true,
                    tech: ['React, React Router, React Redux','Python Django, Django Rest Api', 'Postgresql DataBase', 'CSS, CSS Grids, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Cart Functionality', 'Infinite Scroll', 'Sorting Items', 'Carousel (Built using vanilla javascript only)', 'Django Admin Dashboard'],
                    imgsOne: [],
                    imgsTwo: []
                },
                {
                    name: 'Hello Blog',
                    premium: true,
                    projectImage: "hello",
                    projectHeaderImage: "helloheader",
                    height: true,
                    home: true,
                    tech: ['Python Django', 'Django Template Engine', 'Postgresql DataBase', 'Vanilla JavaScript', 'CSS, CSS Grids, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Image Upload', 'Authentication, Sign up and log in', 'Image Compression', 'Pagination', 'Follow, like and comment', 'Carousel (Built using vanilla javascript only)', 'Django Admin Dashboard'],
                    imgsOne: [],
                    imgsTwo: []
                },
                {
                    name: 'Social Media App',
                    premium: true,
                    projectImage: "social",
                    projectHeaderImage: "socialheader",
                    height: false,
                    home: true,
                    tech: ['React, React Router, React Redux', 'FireBase backend', 'CSS, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Authentication, Sign up and log in', 'Follow, like and comment', 'Chat and Notifications', 'Infinite Scroll', 'Dark Theme'],
                    imgsOne: [],
                    imgsTwo: []
                },
                {
                    name: 'My Portfolio',
                    premium: true,
                    projectImage: "portifolio",
                    projectHeaderImage: "portifolioheader",
                    height: true,
                    tech: ['Vue, Vue Router, Vuex', 'CSS, CSS Grids, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Dark Theme'],
                    imgsOne: [],
                    imgsTwo: []
                },
                {
                    name: 'University Website',
                    premium: false,
                    projectImage: "uni",
                    projectHeaderImage: "uniheader",
                    height: false,
                    tech: ['React, React Router, React Redux', 'CSS, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Tables', 'Hover Menus'],
                    imgsOne: [],
                    imgsTwo: []
                },
                {
                    name: 'Nature Landing',
                    premium: false,
                    projectImage: "nature",
                    projectHeaderImage: "natureheader",
                    height: false,
                    tech: ['Html', 'CSS, CSS FlexBox, Media Queries', 'Sass, Sass Varibles', 'Vanilla Javascript'],
                    features: ['Responsive Design', 'Carousel (Built using vanilla javascript only)'],
                    imgsOne: [],
                    imgsTwo: []
                }

            ],
            currentProject: null
        }
    },
    getters,
    mutations,
    actions
})

