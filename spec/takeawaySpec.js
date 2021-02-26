'use strict'

describe('Takeaway', () => {
  
  var takeaway

  beforeEach(() => {
    takeaway = new Takeaway();
  })

  it('has an empty menu', () => {
    expect(takeaway.readMenu()).toEqual([]);
  });

  it('adds an item to the menu', () => {
    takeaway.addItemToMenu('Cheesey Chips', 2.50);
    expect(takeaway.readMenu()).toContain({item: 'Cheesey Chips', price: 2.50});
  })

  it('adds multiple items of food to the menu', () => {
    takeaway.addItemToMenu('Cheesey Chips', 2.50);
    takeaway.addItemToMenu('Burger', 3.00);
    expect(takeaway.readMenu()).toContain({item: 'Cheesey Chips', price: 2.50});
    expect(takeaway.readMenu()).toContain({item: 'Burger', price: 3.00});
  })

  it('allows an order to be created', () => {
    takeaway.addItemToMenu('Cheesey Chips', 2.50);
    takeaway.addItemToMenu('Burger', 3.00);
    takeaway.addItemToOrder('Burger');
    takeaway.addItemToOrder('Cheesey Chips');
    expect(takeaway.readOrder()).toContain({item: 'Cheesey Chips', price: 2.50});
    expect(takeaway.readOrder()).toContain({item: 'Burger', price: 3.00});
  })

  it('calculates the price of an order', () => {
    takeaway.addItemToMenu('Cheesey Chips', 2.50);
    takeaway.addItemToMenu('Burger', 3.00);
    takeaway.addItemToOrder('Burger');
    takeaway.addItemToOrder('Cheesey Chips');   
    expect(takeaway.calculatePrice()).toEqual(5.50)
  })

});