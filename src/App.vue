<template>
<div class="wrapper">
    <!-- Page Content  -->
    <Sidebar />
    <div id="content">
        <Nav />
        <QueryForm />
        <Content />
    </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import Content from './components/Content'
import QueryForm from './components/QueryForm'

export default {
    name: "App",
    components: {
        Sidebar,
        Nav,
        Content,
        QueryForm
    }
};
</script>

<style>

</style>
