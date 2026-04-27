import Cofee from "./Coffee.js";
import Tea from "./Tea.js";
import Lemonade from "./Lemonade.js";
import Cafe from "./Cafe.js";

const cofee = new Cofee(
  "Cappuccino",
  "medium",
  180,
  65,
  "Arabica",
  "whole milk",
);
const tea = new Tea("Green Tea", "small", 90, 75, "green", false);
const lemonade = new Lemonade(
  "Classic lemonade",
  "large",
  120,
  5,
  "lemon",
  true,
);

const cafe = new Cafe("Drink House", "Dushanbe");

console.log(cafe.getInfo());

cafe.order(cofee);
cafe.order(tea);
cafe.order(lemonade);
