export default class Produto {
  constructor(obj) {
    obj = obj || {};
    
    this.id = obj.id;
    this.name = obj.name || "";
    this.price = obj.price || 0;
    this.amount = obj.amount || 0;
    this.registerDate = obj.registerDate;
  }
}
