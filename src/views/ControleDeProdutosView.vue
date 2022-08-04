<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Products</h2>
        <hr />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <ButtonComponent :callBack="adicionarProduto" value="Add" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
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
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price | real }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.registerDate | data }}</td>
              <td>
                <i
                  @click="editarProduto(item)"
                  class="fas fa-pen table-icon"
                ></i>
                <i
                  @click="excluirProduto(item)"
                  class="fas fa-trash table-icon"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "@/components/Button/ButtonComponent.vue";
import ProdutoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import { aplicarMascaraEmDataIso } from "@/utils/conversor-data";
import conversorMonetario from "@/utils/conversor-monetario";

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

  filters: {
    data(data) {
      return aplicarMascaraEmDataIso(data);
    },
    real(valor) {
      return conversorMonetario.aplicarMascaraParaRealComPrefixo(valor);
    },
  },

  methods: {
    async obterTodosOsProdutos() {
      const response = await ProdutoService.obterTodos();
      this.produtos = response.data.map((p) => new Produto(p));
    },
    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },
    editarProduto(produto) {
      this.$router.push({ name: "EditarProduto", params: { id: produto.id } });
    },
    excluirProduto() {},
  },

  mounted() {
    this.obterTodosOsProdutos();
  },
};
</script>

<style scoped>
.table-icon {
  margin: 5px;
  cursor: pointer;
  color: var(--primary-color);
}
</style>