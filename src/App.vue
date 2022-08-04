<template>
  <div id="app">
    <Menu v-if="this.$router.currentRoute.name !== 'Login'" />
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu/MenuComponent.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
:root {
  --primary-color: #6200ea;
  --secondary-color: #651fff;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}

.container {
  margin-top: 15px;
}

.titulo {
  font-family: Roboto;
  font-weight: 500;
}

/* Override */
.btn-primary,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: var(--primary-color);
  border: var(--primary-color);
  outline: none;
  box-shadow: none;
  min-width: 90px;
}
.btn-primary:hover {
  color: #fff;
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

hr {
  margin: 0;
}
</style>
