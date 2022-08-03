export const aplicarMascaraParaReal = (valor) => {
  if (isNaN(valor)) return 0;

  return Number(valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
};

export const aplicarMascaraParaRealComPrefixo = (valor) => {
  if (isNaN(valor)) return 0;

  return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "USD" });
};

export default {
  aplicarMascaraParaReal,
  aplicarMascaraParaRealComPrefixo,
};
