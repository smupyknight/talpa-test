import { createRouter, createWebHistory } from 'vue-router'
import GqlHome from '../components/pages/SensorHome.vue'
import GqlMachineDetails from '../components/pages/SensorMachineDetails.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: GqlHome,
    },
    {
        path: '/:name',
        name: 'machine-details',
        component: GqlMachineDetails,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
