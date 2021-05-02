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
                    url: 'http://ec2-3-141-166-241.us-east-2.compute.amazonaws.com'
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
                    url: 'http://ec2-3-142-156-72.us-east-2.compute.amazonaws.com'
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
                    url: 'https://socialmedia-2fd3c.web.app',
                    source: 'https://github.com/or1995/Social-Media-App'
                },
                {
                    name: 'My Portfolio',
                    premium: true,
                    projectImage: "portifolio",
                    projectHeaderImage: "portifolioheader",
                    height: true,
                    tech: ['Vue, Vue Router, Vuex', 'CSS, CSS Grids, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Dark Theme'],
                    url: 'https://omaralidev.com'
                },
                {
                    name: 'University Website',
                    premium: false,
                    projectImage: "uni",
                    projectHeaderImage: "uniheader",
                    height: false,
                    tech: ['React, React Router, React Redux', 'CSS, CSS FlexBox, Media Queries'],
                    features: ['Responsive Design', 'Tables', 'Hover Menus'],
                    url: 'https://univeristytemplate.web.app',
                    source: 'https://github.com/or1995/University-Template'
                },
                {
                    name: 'Nature Landing',
                    premium: false,
                    projectImage: "nature",
                    projectHeaderImage: "natureheader",
                    height: false,
                    tech: ['Html', 'CSS, CSS FlexBox, Media Queries', 'Sass, Sass Varibles', 'Vanilla Javascript'],
                    features: ['Responsive Design', 'Carousel (Built using vanilla javascript only)'],
                    url: 'https://naturesassor.web.app',
                    source: 'https://github.com/or1995/Nature-Website-Templete'
                }

            ],
            currentProject: null
        }
    },
    getters,
    mutations,
    actions
})

