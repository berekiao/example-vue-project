import Dashboard from '@/views/Dashboard.vue'
import Users from '@/views/pages/Users.vue'
import Permission from '@/views/pages/Permission.vue'
import Role from '@/views/pages/Role.vue'
import Client from '@/views/pages/Client.vue'
import Course from '@/views/pages/Course.vue'
import Livreur from '@/views/pages/Livreur.vue'
import Moto from '@/views/pages/Moto.vue'
import Affectation from '@/views/pages/Affectation.vue'
import Zone from '@/views/pages/Zone.vue'
import Ville from '@/views/pages/Ville.vue'
import Quartier from '@/views/pages/Quartier.vue'

export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: { requiresAuth: true }
    },
    {
        path: '/permissions',
        name: 'Permissions',
        component: Permission,
        meta: { requiresAuth: true }
    },
    {
        path: '/roles',
        name: 'Roles',
        component: Role,
        meta: { requiresAuth: true }
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Client,
        meta: { requiresAuth: true }
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Course,
        meta: { requiresAuth: true }
    },
    {
        path: '/livreurs',
        name: 'Livreurs',
        component: Livreur,
        meta: { requiresAuth: true }
    },
    {
        path: '/motos',
        name: 'Motos',
        component: Moto,
        meta: { requiresAuth: true }
    },
    {
        path: '/affectations',
        name: 'Affectations',
        component: Affectation,
        meta: { requiresAuth: true }
    },
    {
        path: '/zones',
        name: 'Zones',
        component: Zone,
        meta: { requiresAuth: true }
    },
    {
        path: '/villes',
        name: 'Villes',
        component: Ville,
        meta: { requiresAuth: true }
    },
    {
        path: '/quartiers',
        name: 'Quartiers',
        component: Quartier,
        meta: { requiresAuth: true }
    }
]
