<template>
  <ul class="menu">
    <li>
      <a @click="() => this.$router.push({ path: '/' })">Dashboard</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/controle-de-produtos' })"
        >Products</a
      >
    </li>
    <li>
      <a
        @click="() => this.$router.push({ path: '/controle-de-clientes' })"
        to=""
        >Clients</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/login' })">Logout</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--primary-color);
}

li {
  float: left;
}

li:first-child {
  margin-left: 40px;
}

li:last-child {
  float: right;
  margin-right: 10px;
}

ul.menu li a {
  display: block;
  color: #fff;
  padding: 15px 17px;
  text-decoration: none;
  text-align: center;
}

ul.menu a:hover {
  background-color: var(--secondary-color);
  cursor: pointer;
  color: #fff;

}
</style>