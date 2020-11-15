<template>
<!-- Sidebar  -->
<nav id="sidebar" class="active">
    <div class="sidebar-header">
        <h3>Turinfo</h3>
        <strong><i class="fas fa-route"></i></strong>
    </div>

    <ul class="list-unstyled components">
        <li>
            <router-link to="/overview">
                <i class="fas fa-home"></i> Overview
            </router-link>
        </li>
        <li>
            <a href="#querySubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-search"></i>
                Consulta
            </a>
            <ul class="collapse list-unstyled" id="querySubmenu">
                <li>
                    <router-link to="/contact">
                        <i class="fa fa-chart-line fa-lg"></i> Graficas
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        <i class="fas fa-table"></i> Tablas
                    </router-link>
                </li>
            </ul>
        </li>
        <li>
            <router-link to="/">
                <i class="fas fa-chart-bar"></i>
                Stats
            </router-link>
        </li>
        <li>
            <router-link to="/">
                <i class="fas fa-question"></i>
                Guia
            </router-link>
        </li>
        <li>
            <router-link to="/contact">
                <i class="fas fa-paper-plane"></i> Contacto
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: "Sidebar"
};
</script>

<style></style>
