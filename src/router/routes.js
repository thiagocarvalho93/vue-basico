import LoginView from "../views/LoginView.vue";
import DashboardView from "@/views/DashboardView";
import ControleDeProdutosView from "@/views/ControleDeProdutosView";
import ControleDeClientesView from "@/views/ControleDeClientesView";
import CadastroProdutoView from "@/views/CadastroProdutoView";

export const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    title: "Login",
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
    title: "Dashboard",
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/controle-de-produtos",
    name: "ControleDeProdutos",
    component: ControleDeProdutosView,
    title: "Produtos",
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/controle-de-clientes",
    name: "ControleDeClientes",
    component: ControleDeClientesView,
    title: "Clientes",
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/controle-de-produtos/novo",
    name: "NovoProduto",
    component: CadastroProdutoView,
    title: "Adicionar Produto",
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/controle-de-produtos/editar",
    name: "EditarProduto",
    component: CadastroProdutoView,
    title: "Editar Produto",
    meta: {
      requiredAuth: true,
    },
  },
];
