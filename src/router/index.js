import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterView from "../components/CounterView.vue"
import EmployeesView from "../components/EmployeesView.vue"
import UserList from "../components/UserList.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'CounterView',
    component: CounterView
  },
  {
    path: '/employees',
    name: 'EmployeesView',
    component: EmployeesView
  },
  {
    path: '/userlist',
    name: 'UserList',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
