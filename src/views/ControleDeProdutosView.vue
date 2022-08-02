<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <ButtonComponent value="Adicionar" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Register date</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "@/components/Button/ButtonComponent.vue";
import { obterTodos } from "@/services/produto-service";
import Produto from "@/models/Produto";

export default {
  name: "ControleDeProdutos",
  data() {
    return {
      produtos: [],
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    async obterTodosOsProdutos() {
      const response = await obterTodos();
      this.produtos = response.data.map((p) => new Produto(p));
      console.log(this.produtos);
    },
  },
  mounted() {
    this.obterTodosOsProdutos();
  },
};
</script>

<style scoped>
</style>