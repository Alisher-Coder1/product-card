import Drink from "./Drink.js";

export default class Cofee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);

    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()}, beans: ${this.beanType}, milk: ${this.milkType}`;
  }
}
