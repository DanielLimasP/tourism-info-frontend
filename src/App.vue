<template>
<div class="wrapper">
    <!-- Page Content  -->
    <Sidebar />
    <div id="content">
        <Nav />
        <Content />
    </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import Content from './components/Content'

export default {
    name: "App",
    components: {
        Sidebar,
        Nav,
        Content
    }
};
</script>

<style>

</style>
