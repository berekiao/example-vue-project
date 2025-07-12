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
import Zone from "@/views/pages/Zone.vue";
import Ville from "@/views/pages/Ville.vue";
import Quartier from "@/views/pages/Quartier.vue";
const routes = [
    {
        path: "/dashboard",
        component: WebsiteLayout,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/client",
                name: "Client",
                component: Client,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/courses",
                name: "Course",
                component: Course,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/livreur",
                name: "Livreur",
                component: Livreur,
                meta: { isAuthenticated: false },
                
            },
            {
                path: "/dashboard/modepaiement",
                name: "ModePaiement",
                component: ModePaiement,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/moto",
                name: "Moto",
                component: Moto,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/affectation",
                name: "Affectation",
                component: Affectation,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/users",
                name: "Users",
                component: Users,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/roles",
                name: "Role",
                component: Role,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/permissions",
                name: "Permission",
                component: Permission,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/zones",
                name: "Zone",
                component: Zone,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/villes",
                name: "Ville",
                component: Ville,
                meta: { isAuthenticated: false },
            },
            {
                path: "/dashboard/quartiers",
                name: "Quartier",
                component: Quartier,
                meta: { isAuthenticated: false },
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