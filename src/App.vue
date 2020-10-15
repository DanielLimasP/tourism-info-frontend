<template>
<div class="wrapper">
    <!-- Page Content  -->
    <Sidebar />
    <div id="content">
        <Content />
    </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Content from './components/Content'

export default {
    name: "App",
    components: {
        Sidebar,
        Content
    }
};
</script>

<style>

</style>
