import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import MovieDetail from '../components/MovieDetail.vue'
import Actors from '../components/Actors.vue'
import ActorDetail from '../components/ActorDetail.vue'
import Contact from '../components/Contact'
import Profile from '../components/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/movie/:id",
    name: 'Home',
    component: MovieDetail
  },
  {
    path:"/actors",
    name:"actors",
    component: Actors,
  },
  {
    path: "/actor/:id",
    name:"actor",
    component: ActorDetail
  },
  {
    path:"/contact",
    name:"contact",
    component: Contact
  },
 {
  path: "/profile",
  name: "profile",
  component: Profile
 },
 


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router