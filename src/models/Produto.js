import conversorData from "@/utils/conversor-data";
export default class Produto {
  constructor(obj) {
    obj = obj || {};

    this.id = obj.id || 0;
    this.name = obj.name || "";
    this.price = obj.price || 0;

    this.amount = obj.amount || 0;
    this.registerDate =
      obj.registerDate &&
      conversorData.aplicarMascaraFormatoAmericanoEmDataISO(obj.registerDate);
  }

  validarParaCadastro() {
    return !!this.name;
  }

  validarParaAtualizar() {
    return !!(this.id && this.name);
  }
}
