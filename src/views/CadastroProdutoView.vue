<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-sm-12">
        <h2 class="titulo">{{ modoCadastro ? "Add" : "Edit" }} product</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Code</label>
          <input
            id="id"
            v-model="produto.id"
            type="text"
            class="form-control"
            disabled
          />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Name</label>
          <input
            id="nome"
            v-model="produto.name"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="price">Price</label>
          <input
            id="price"
            v-model="produto.price"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            id="amount"
            v-model="produto.amount"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="date">Register date</label>
          <input
            id="date"
            v-model="produto.registerDate"
            type="date"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-12">
        <div class="form-group">
          <label for="obs">Obs</label>
          <textarea
            id="obs"
            v-model="produto.obs"
            class="form-control"
            rows="4"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr class="m-3" />
      </div>

      <div class="col-sm-12">
        <div v-if="modoCadastro" class="form-check-inline">
          <label class="form-check-label">
            <input
              v-model="continuarAdicionando"
              type="checkbox"
              class="form-check-input"
              value=""
            />Continuar adicionando
          </label>
        </div>

        <button @click="cancelarAcao" class="btn btn-default mr-2 float-right">
          Cancelar
        </button>
        <button @click="salvarProduto" class="btn btn-primary float-right">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "@/models/Produto";
import ProdutoService from "@/services/produto-service";

export default {
  name: "ProdutoView",
  data() {
    return {
      produto: new Produto(),
      modoCadastro: true,
      continuarAdicionando: false,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    if (!id) return;

    this.modoCadastro = false;
    this.obterProdutoPorId(id);
  },
  methods: {
    async obterProdutoPorId(id) {
      const response = await ProdutoService.obterPorId(id);
      console.log(response);
      this.produto = response.data;
    },

    async cadastrarProduto() {
      if (!this.produto.validarParaCadastro) {
        alert("O nome do produto é obrigatório!");
        return;
      }

      const response = await ProdutoService.cadastrar(this.produto);
      this.produto = new Produto();
      alert("Produto adicionado com sucesso!");

      console.log(response);
      if (!this.continuarAdicionando) {
        this.cancelarAcao();
      }
    },

    atualizarProduto() {},

    salvarProduto() {
      this.modoCadastro ? this.cadastrarProduto() : this.atualizarProduto();
    },

    cancelarAcao() {
      this.$router.push({ name: "ControleDeProdutos" });
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>