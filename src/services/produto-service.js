import api from "./api";

export const obterTodos = async () => {
  try {
    const response = await api.get("/produtos");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const obterPorId = async (id) => {
  try {
    const response = await api.get(`/produtos/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const cadastrar = async (produto) => {
  try {
    const response = await api.post(`/produtos`, produto);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const atualizar = async (id, produto) => {
  try {
    const response = await api.put(`/produtos/${id}`, produto);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deletar = async (id) => {
  try {
    const response = await api.delete(`/produtos/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
