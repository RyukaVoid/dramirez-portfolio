import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HelloWorld from "../components/PortFolio.vue";


const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HelloWorld },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router