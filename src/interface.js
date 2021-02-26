$(document).ready(function() {
  var takeaway = new Takeaway();
  

  $('#add-menu-item').submit(function(event) {
    event.preventDefault();
    var newItem = $('#new-menu-item').val();
    var newItemPrice = $('#new-menu-item-price').val();
    takeaway.addItemToMenu(newItem, newItemPrice);
    $('#current-menu').text(JSON.stringify(takeaway.readMenu(), null, 4));
  })

  $('#select-menu-item').submit(function(event) {
    event.preventDefault();
    var currentOrderItem = $('#current-order-item').val();
    takeaway.addItemToOrder(currentOrderItem);
    $('#current-order').text(JSON.stringify(takeaway.readOrder(), null, 4))
  })

  $('#price-submit').submit(function(event) {
    event.preventDefault();
    $('#price-heading').text('Final price:')
    $('#price').text(takeaway.calculatePrice())
  })

})