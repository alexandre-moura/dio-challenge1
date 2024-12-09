import Hero from "./Hero.js";

class Mage extends Hero {
  atacar() {
    console.log(`${this.nome}, o Mago, atacou usando magia poderosa!`);
  }
}

export default Mage;
