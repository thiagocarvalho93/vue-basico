<template>
  <div class="about">
    <h1>{{ mensagem }}</h1>
  </div>
</template>
<script>

export default {
  name: "DashboardView",
  data() {
    return {
      mensagem: "Estou na tela dashboard",
    };
  },
};
</script>

<style scoped>
  
</style>