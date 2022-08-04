import moment from "moment";

export const aplicarMascaraEmDataIso = (data) => {
  if (!data) return "";

  return moment(data).locale("pt-br").format("DD/MM/YYYY");
};

export const aplicarMascaraDataHoraEmDataIso = (data) => {
  if (!data) return "";

  return moment(data).locale("pt-br").format("DD/MM/YYYY HH:mm:ss");
};

export const aplicarMascaraISOEmFormatoAmericano = (data) => {
  if (!data) return "";

  let dataAmericana = moment(data).locale("pt-br").format("YYYY-MM-DD");
  return dataAmericana + "T00:00:00";
};

export const aplicarMascaraFormatoAmericanoEmDataISO = (data) => {
  if (!data) return "";

  return moment(data).locale("pt-br").format("YYYY-MM-DD");
};

export default {
  aplicarMascaraEmDataIso,
  aplicarMascaraDataHoraEmDataIso,
  aplicarMascaraISOEmFormatoAmericano,
  aplicarMascaraFormatoAmericanoEmDataISO,
};
