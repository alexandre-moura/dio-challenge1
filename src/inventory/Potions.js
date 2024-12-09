import Item from "./Item.js";

class Potion extends Item {
  constructor(nome, cura) {
    super(nome, "potion");
    this.cura = cura;
  }

  usar(hero) {
    hero.vida += this.cura;
    console.log(
      `${hero.nome} usou ${this.nome} e recuperou ${this.cura} de vida.`
    );
  }
}

export default Potion;
