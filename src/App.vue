<template>
  <div class="wrapper">
    <!-- Page Content  -->
    <Sidebar />
    <div id="content">
      <!-- TODO: Add router-view  -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style></style>
