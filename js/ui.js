var pizzaInfo = {toppings: []};

function domify() {
  $('.order').remove();
  currentCustomer.orders.forEach(function(order) {
    $('body').append('<div class="order" id="order'+ order.id + '"></div>');
    $('#order' + order.id).append('<h3>'+order.id+'</h3>');
    $('#order' + order.id).append('<h2 class="size">hello</h2>');
    $('#order' + order.id).append('<button class="newPizza" type="button" id="order-'+order.id+'">New Pizza</button>');

     order.pizzas.forEach(function(pizza) {
       var toppings = '';
      pizza.toppings.forEach(function(topping, i){
           toppings += "<h6>" + topping + "</h6>";
       });

      $('#order' + order.id).append('<div class="iconContainer"><h2 class=".size">' + pizza.size + '</h2><div class="pizzaIcon"></div>'+toppings+'</div>');

    });

    $('#order-' + order.id).click(function(){
      $('#cloud').fadeIn();
      $('pizzaForm').fadeIn();

      $('#addTopping').click(function(){
        pizzaInfo.toppings.push($('input[type="text"]').val());
        $('input[type="text"]').val('');

      });

      $('#createPizza').click(function(){
        pizzaInfo['size'] = $('input[type="radio"]:checked').val();
        order.pizzas.push(new Pizza(pizzaInfo, order));
        pizzaInfo = {toppings: []};
        $('#cloud').fadeOut();
        $('pizzaForm').fadeOut();
        $(this).unbind();
        domify();
      });
      $(this).unbind();
    });
  });
}



$(function(){
  var id = 0;
  // var name = prompt("hello! What's your name?");
  currentCustomer = new Customer("fred");

  $('#newOrder').click(function() {
    currentCustomer.orders.push(new Order(currentCustomer, id));
    id++;
    domify();
  });

});
