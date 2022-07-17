<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <img src="../../public/img/logo.png" class="logo" alt="logo">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#about">Sobre nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#trajectory">Trayectoria</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#catalogue">Catálogo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  }
}
</script>

<style>
.logo {
  height: 60px;
}
</style>