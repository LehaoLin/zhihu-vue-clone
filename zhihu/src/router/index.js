import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'Home',
                component: () =>
                    import ('../views/Home.vue'),
            },
            {
                path: '/like',
                name: 'Like',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Like.vue')
            },
            {
                path: '/friends',
                name: 'Friends',
                component: () =>
                    import ('../views/Friends.vue')
            },
            {
                path: '/user',
                name: 'User',
                component: () =>
                    import ('../views/User.vue'),
                children: [{
                    path: "/user-profile",
                    name: "User-profile",
                    component: () =>
                        import ('../views/user/user-profile.vue')
                }]
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/About.vue')
            },
        ]
    },


]

const router = new VueRouter({
    mode: 'history', //去掉url中的#
    routes
})

export default router