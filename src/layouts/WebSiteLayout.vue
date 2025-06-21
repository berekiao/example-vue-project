<template>
    <body>
        <div id="wrapper">
            <SideBar />

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <router-view />
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    import NavBar from './backend/NavBar.vue';
    import SideBar from './backend/SideBar.vue';
    export default {
        components: {
            NavBar,
            SideBar
        },
    }
</script>

<style lang="scss" scoped>

</style>