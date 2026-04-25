import Drink from "./Drink.js";

export default class Limonade extends Drink {
  constructor(name, size, price, temperature, flavor, isSparkling) {
    super(name, size, price, temperature);

    this.flavor = flavor;
    this.isSparkling = isSparkling;
  }

  getInfo() {
    const sparklingInfo = this.isSparkling ? "sparkling" : "still";

    return `${super.getInfo()}, flavor: $
        {this.flavor}, type: ${sparklingInfo}`;
  }
}
