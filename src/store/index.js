import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default createStore({
    state() {
        return {
            projects: [
                {
                    name: 'ECommerce',
                    premium: true,
                    projectImage: "ecommerce2",
                    projectHeaderImage: "ecommerce2header",
                    height: false,
                    home: true
                },
                {
                    name: 'Hello Blog',
                    premium: true,
                    projectImage: "hello",
                    projectHeaderImage: "helloheader",
                    height: true,
                    home: true
                },
                {
                    name: 'Social Media App',
                    premium: true,
                    projectImage: "social",
                    projectHeaderImage: "socialheader",
                    height: false,
                    home: true
                },
                {
                    name: 'My Portfolio',
                    premium: true,
                    projectImage: "portifolio",
                    projectHeaderImage: "portifolioheader",
                    height: true
                },
                {
                    name: 'University',
                    premium: false,
                    projectImage: "uni",
                    projectHeaderImage: "uniheader",
                    height: false
                },
                {
                    name: 'Nature Landing',
                    premium: false,
                    projectImage: "nature",
                    projectHeaderImage: "natureheader",
                    height: false
                }

            ]
        }
    },
    getters,
    mutations,
    actions
})

