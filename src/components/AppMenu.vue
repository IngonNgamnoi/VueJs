<template>
 <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/home" class="navbar-item" active-class="active" exact>
        Home
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <router-link to="/overview" class="navbar-item" active-class="active">
        Docs
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <router-link to="/item" class="navbar-item" active-class="active">
        Items
      </router-link>
        <div class="navbar-dropdown is-boxed">
          <router-link to="/overview" class="navbar-item" active-class="active">
        Overview
      </router-link>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>
    </div>

  </div>
</nav>
</template>
