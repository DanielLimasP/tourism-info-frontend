<template>
<div class="wrapper">
    <!-- Page Content  -->
    <Sidebar />
    <div id="content">
        <Content />
        <Contact />
    </div>
</div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Contact from './views/Contact';

export default {
    name: "App",
    components: {
        Sidebar,
        Content,
        Contact
    }
};
</script>

<style></style>
