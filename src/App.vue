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
</style>
