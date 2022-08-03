import moment from "moment";

export const aplicarMascaraEmDataIso = (data) => {
  if (!data) return "";

  return moment(data).locale("pt-br").format("DD/MM/YYYY");
};

export const aplicarMascaraDataHoraEmDataIso = (data) => {
  if (!data) return "";

  return moment(data).locale("pt-br").format("DD/MM/YYYY HH:mm:ss");
};
