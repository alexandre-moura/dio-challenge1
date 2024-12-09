import Hero from "./Hero.js";

class Ninja extends Hero {
  atacar() {
    console.log(`${this.nome}, o Ninja, atacou usando uma shuriken letal!`);
  }
}

export default Ninja;
