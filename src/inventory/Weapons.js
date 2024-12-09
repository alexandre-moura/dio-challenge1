import Item from "./Item.js";

class Weapon extends Item {
  constructor(nome, dano) {
    super(nome, "weapon");
    this.dano = dano;
  }
}

export default Weapon;
