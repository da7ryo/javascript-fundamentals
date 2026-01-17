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

  getLowStockProducts(treshold) {
    /* const newArr = [];
    for (let i = 0; i < this.items.length; i++) {
      const currentProduct = this.items[i];
      if (currentProduct.isLowStock(8)) {
        newArr.push(currentProduct);
      }
    }
    return newArr;
   */
    return this.items.filter((item) => item.isLowStock(treshold));
  }
}
const inventoryManager = new InventoryManager();

const p1 = new Product(1, 'laptop', 1200, 10);
const p2 = new Product(2, 'Tv', 650, 5);

inventoryManager.addProduct(p1);
inventoryManager.addProduct(p2);
inventoryManager.addProduct(new Product(3, 'Phone', 700, 10));

// console.log(inventoryManager.items);

const alertSystem = function (product) {
  if (product.isLowStock(8)) {
    console.log(`ALERT: ${product.name} is low! Only ${product.stock} left.`);
  }
};

inventoryManager.processInventory(alertSystem);

console.log(inventoryManager.getLowStockProducts());
const lowStockProducts = inventoryManager.getLowStockProducts();

if (lowStockProducts.length) {
  const firstLowStockProduct = lowStockProducts[0];
  firstLowStockProduct.name = 'Leteca metla';
}
console.log(inventoryManager.items);

const arr = [1, 2, 3];
arr2 = new Array(1, 2, 3);

arr.push(); // ipisati Hello world
