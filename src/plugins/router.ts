import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import PortFolio from "../components/PortFolio.vue";


const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: PortFolio },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router