'use strict'

class Takeaway {

  constructor() {
    this.menu = [];
    this.order = [];
    this.price = 0;
  }

  readMenu() {
    return this.menu;
  }

  readOrder() {
    return this.order;
  }

  addItemToMenu(item, price) {
    this.menu.push({item: item, price: price});
  }

  addItemToOrder(food) {
    this.menu.forEach(item => {
      for (let order in item) {
        if (food === item[order]) {
          this.order.push(item)
        }
      }
    });
  }
  
  calculatePrice(currentOrder=this.order) {
    currentOrder.forEach(item => {
      for (let order in item) {
        if (order === 'price') {
          this.price += item[order]
        }
      }
    })
    return this.price
  }

}