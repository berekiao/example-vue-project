<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">GEST YTS <sup>2</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/dashboard">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Menus
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-user"></i>
                <span>SUIVI DES COURSES</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Service livraison</h6>
                    <router-link class="collapse-item" to="/dashboard/courses">Courses</router-link>
                    <router-link class="collapse-item" to="/dashboard/client">Clients</router-link>
                </div>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span>LOGISTIQUES</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Gestion Opérationnelle</h6>
                    <router-link class="collapse-item" to="/dashboard/livreur">Livreurs</router-link>
                    <router-link class="collapse-item" to="/dashboard/moto">Moto</router-link>
                    <router-link class="collapse-item" to="/dashboard/zones">Zones</router-link>
                    <router-link class="collapse-item" to="/dashboard/villes">Villes</router-link>
                    <router-link class="collapse-item" to="/dashboard/quartiers">Quartiers</router-link>
<!--                     <router-link class="collapse-item" to="/dashboard/modepaiement">Mode Paiement</router-link>
 -->                    <router-link class="collapse-item" to="/dashboard/affectation">Historique Affectation</router-link>
                </div>
            </div>
        </li>

        <li class="nav-item" v-if="isSuperAdmin">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUser"
                aria-expanded="true" aria-controls="collapseUser">
                <i class="fas fa-fw fa-users"></i>
                <span>ADMINISTRATION</span>
            </a>
            <div id="collapseUser" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Gestion des Utilisateurs</h6>
                    <router-link class="collapse-item" to="/dashboard/users">Utilisateurs</router-link>
                    <router-link class="collapse-item" to="/dashboard/roles">Roles</router-link>
                    <router-link class="collapse-item" to="/dashboard/permissions">Permissions</router-link>
<!--                     <router-link class="collapse-item" to="/dashboard/affectation">Historique Affectation</router-link>
 -->                </div>
            </div>
        </li>

        

    </ul>
</template>

<script>
export default {
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('userConnected'));
        },
        isSuperAdmin() {
            return this.user?.role?.nomRole === "SUPERADMIN";
        },
    }
}
</script>

<style lang="scss" scoped></style>