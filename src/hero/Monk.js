import Hero from "./Hero.js";

class Monk extends Hero {
  atacar() {
    console.log(
      `${this.nome}, o Monge, atacou usando artes marciais habilidosas!`
    );
  }
}

export default Monk;
