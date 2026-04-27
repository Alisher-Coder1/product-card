export default class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error(
        "Drink is an abstract class and cannot be instantiated directly",
      );
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo() {
    return `${this.name}, size: $ {this.size}, price: ${this.price} RUB`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #prepare() {
    console.log(`${this.name} is being prepared`);
  }
  serve() {
    this.#prepare();
    console.log(`${this.name} is served`);
  }
}
