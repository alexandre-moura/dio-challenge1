class Inventory {
  constructor() {
    this.items = [];
  }

  // Add an item to the inventory
  addItem(item) {
    this.items.push(item);
    console.log(`Item ${item.name} foi adicionado ao inventário.`);
  }

  // Remove an item from the inventory
  removeItem(itemName) {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      const removed = this.items.splice(index, 1);
      console.log(`Item ${removed[0].name} foi removido do inventário.`);
      return removed[0];
    } else {
      console.log(`Item ${itemName} não foi encontrado no inventário.`);
      return null;
    }
  }

  // List all items in the inventory
  listItems() {
    if (this.items.length === 0) {
      console.log("O inventário está vazio.");
    } else {
      console.log("Itens no inventário:");
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
      });
    }
  }

  // Use a consumable item
  useItem(itemName) {
    const item = this.removeItem(itemName);
    if (item && item.type === "Consumable") {
      console.log(`Você usou o item ${item.name}.`);
      return item.effect; // Return the item's effect for processing (e.g., healing)
    } else if (item) {
      console.log(`O item ${item.name} não é utilizável.`);
      this.addItem(item); // Return the item to the inventory
    }
  }
}

export default Inventory;
