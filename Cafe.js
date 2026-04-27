export default class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `${this.name}, location: ${this.location}`;
  }

  order(drink) {
    console.log(`Order accepted in ${this.name}`);
    console.log(drink.getInfo());
    console.log(`Temperature: ${drink.getTemperature()}\u00B0`);

    drink.serve();
  }
}
