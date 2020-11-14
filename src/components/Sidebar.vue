<template>
  <!-- Sidebar  -->
  <nav id="sidebar" class="active">
    <div class="sidebar-header">
      <h3>Turinfo</h3>
      <strong><i class="fas fa-route"></i></strong>
    </div>

    <ul class="list-unstyled components">
      <li>
        <a href=" #">
          <i class="fas fa-home"></i>
          Overview
        </a>
      </li>
      <li>
        <a
          href="#querySubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >
          <i class="fas fa-search"></i>
          Consulta
        </a>
        <ul class="collapse list-unstyled" id="querySubmenu">
          <li>
            <a href="#"><i class="fa fa-chart-line fa-lg"></i> Graficas</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-table"></i> Tablas</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-chart-bar"></i>
          Stats
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-question"></i>
          Guia
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-paper-plane"></i>
          Contacto
        </a>
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
