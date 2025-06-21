import { createRouter, createWebHistory } from "vue-router";
import WebsiteLayout from "@/layouts/WebSiteLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import Client from "@/views/pages/Client.vue";
import Course from "@/views/pages/Course.vue";
import Livreur from "@/views/pages/Livreur.vue";
import ModePaiement from "@/views/pages/ModePaiement.vue";
import Moto from "@/views/pages/Moto.vue";
import Affectation from "@/views/pages/Affectation.vue";
import Users from "@/views/pages/Users.vue";
import Role from "@/views/pages/Role.vue";
import Permission from "@/views/pages/Permission.vue";
const routes = [
    {
        path: "/dashboard",
        component: WebsiteLayout,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "/dashboard/client",
                name: "Client",
                component: Client,
            },
            {
                path: "/dashboard/courses",
                name: "Course",
                component: Course,
            },
            {
                path: "/dashboard/livreur",
                name: "Livreur",
                component: Livreur,
                
            },
            {
                path: "/dashboard/modepaiement",
                name: "ModePaiement",
                component: ModePaiement,
            },
            {
                path: "/dashboard/moto",
                name: "Moto",
                component: Moto,
            },
            {
                path: "/dashboard/affectation",
                name: "Affectation",
                component: Affectation,
            },
            {
                path: "/dashboard/users",
                name: "Users",
                component: Users,
            },
            {
                path: "/dashboard/roles",
                name: "Role",
                component: Role,
            },
            {
                path: "/dashboard/permissions",
                name: "Permission",
                component: Permission,
            },
        ],
    },
    {
        path: "/",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // eslint-disable-next-line no-unused-vars
});

export default router;