import { getRandomInt } from "../utils/helpers.js";

class Battle {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
  }

  iniciar() {
    console.log(`${this.hero1.nome} VS ${this.hero2.nome}!`);
    while (this.hero1.vida > 0 && this.hero2.vida > 0) {
      this.turno(this.hero1, this.hero2);
      if (this.hero2.vida <= 0) break;
      this.turno(this.hero2, this.hero1);
    }
    const vencedor = this.hero1.vida > 0 ? this.hero1 : this.hero2;
    console.log(`${vencedor.nome} venceu a batalha!`);
  }

  turno(atacante, defensor) {
    const dano = getRandomInt(10, 20);
    defensor.vida -= dano;
    console.log(
      `${atacante.nome} causou ${dano} de dano em ${defensor.nome}. Vida restante: ${defensor.vida}`
    );
  }
}

export default Battle;
