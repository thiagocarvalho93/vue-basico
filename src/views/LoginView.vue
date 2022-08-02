<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>
    <InputComponent label="Email" placeHolder="example@gmail.com" />
    <InputComponent label="Senha" placeHolder="potato123456" type="password" />
    <Button value="Entrar" :callBack="login" />
  </div>
</template>

<script>
import InputComponent from "@/components/Input/InputComponent.vue";
import Button from "@/components/Button/ButtonComponent.vue";

export default {
  name: "LoginView",
  components: {
    InputComponent,
    Button,
  },
  data() {
    return {
      mensagem: "Estou na tela dashboard",
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/" });
    },
  },
  title: "Login",
};
</script>

<style scoped>
.box-login {
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: 70px;
  padding: 30px;
  border-radius: 4px;
}

.logo {
  font-size: 22px;
  text-align: center;
  color: var(--primary-color);
}
</style>