class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  isLowStock(trashhold) {
    return this.stock < trashhold;
  }
}

class InventoryManager {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
  }

  processInventory(action) {
    /* for (let i = 0; i < this.items.length; i++) {
      action(this.items[i]); 
    } */

    this.items.forEach((product) => {
      action(product);
    });
  }
}

const inventoryManager = new InventoryManager();

const p1 = new Product(1, 'laptop', 1200, 10);
const p2 = new Product(2, 'Tv', 650, 5);

inventoryManager.addProduct(p1);
inventoryManager.addProduct(p2);
inventoryManager.addProduct(new Product(3, 'Phone', 700, 10));
