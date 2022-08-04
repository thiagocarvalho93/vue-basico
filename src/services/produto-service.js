import api from "./api";

const obterTodos = async () => {
  try {
    const response = await api.get("/produtos");
    return response;
  } catch (error) {
    return error.response;
  }
};

const obterPorId = async (id) => {
  try {
    const response = await api.get(`/produtos/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const cadastrar = async (produto) => {
  try {
    const response = await api.post(`/produtos`, produto);
    return response;
  } catch (error) {
    return error.response;
  }
};

const atualizar = async (produto) => {
  try {
    const response = await api.put(`/produtos/${produto.id}`, produto);
    return response;
  } catch (error) {
    return error.response;
  }
};

const deletar = async (id) => {
  try {
    const response = await api.delete(`/produtos/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export default {
  cadastrar,
  atualizar,
  deletar,
  obterPorId,
  obterTodos,
};
