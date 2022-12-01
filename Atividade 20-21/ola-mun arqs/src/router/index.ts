import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import App1 from '../views/App1.vue'
import App2 from '../views/App2.vue'
import App3 from '../views/App3.vue'
import App4 from '../views/App4.vue'
import App from '../views/App.vue'
import Index from '../views/Index.vue'
import Null from '../views/null.vue'

const routes: Array<RouteRecordRaw> = [
  {    path: '/',        component: App  },
  {    path: '/app1',    component: App1  },
  {    path: '/app2',    component: App2  },
  {    path: '/index',   component: Index  },
  {    path: '/app3',   component: App3  },
  {    path: '/app4',   component: App4  },
  {    path: '/null',   component: Null  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
