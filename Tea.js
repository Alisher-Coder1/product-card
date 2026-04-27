import Drink from "./Drink.js";

export default class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, hasSugar) {
    super(name, size, price, temperature);

    this.teaType = teaType;
    this.hasSugar = hasSugar;
  }

  getInfo() {
    const sugarInfo = this.hasSugar ? "with sugar" : "without sugar";

    return `${super.getInfo()}, tea type:
    ${this.teaType}, ${sugarInfo}`;
  }
}
