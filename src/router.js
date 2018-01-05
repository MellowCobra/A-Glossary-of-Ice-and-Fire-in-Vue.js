import Router from 'vue-router'
import Vue from 'vue'

import Home from './home'
import Books from './books'
import Characters from './characters'
import Houses from './houses'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/books', component: Books },
        { path: '/characters', component: Characters },
        { path: '/houses', component: Houses }
    ]
})

function inspect(to, from, next) {
    next()
}

router.beforeEach( inspect )

export default router