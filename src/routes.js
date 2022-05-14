import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [

  {
    path: '/',
    meta: { title: 'Home' },
    component: Home,
  },
  {
    path: '/Doc',
    meta: { title: 'Doc' },
    component: Doc,
  },
]
