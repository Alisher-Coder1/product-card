export default class BuildingMaterial {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    console.log(`${this.name} costs ${this.price} RUB`);
  }
}
