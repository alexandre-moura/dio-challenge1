import Hero from "./Hero.js";

class Warrior extends Hero {
  atacar() {
    console.log(
      `${this.nome}, o Guerreiro, atacou usando uma espada poderosa!`
    );
  }
}

export default Warrior;
