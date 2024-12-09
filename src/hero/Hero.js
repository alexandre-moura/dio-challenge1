class Hero {
  constructor(nome, idade, tipo, nivel = 1, experiencia = 0) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.nivel = nivel;
    this.experiencia = experiencia;
    this.vida = 100 + nivel * 10;
    this.inventario = [];
  }

  atacar() {
    console.log(`${this.nome}, o ${this.tipo}, atacou!`);
  }

  ganharExperiencia(xp) {
    this.experiencia += xp;
    while (this.experiencia >= this.nivel * 100) {
      this.experiencia -= this.nivel * 100;
      this.nivel++;
      console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
  }

  adicionarItem(item) {
    this.inventario.push(item);
    console.log(`${item.nome} foi adicionado ao inventário de ${this.nome}.`);
  }
}

export default Hero;
