

function domify() {
  $('.order').remove();
  currentCustomer.orders.forEach(function(order) {
    $('body').append('<div class="order" id="order'+ order.id + '"></div>');
    $('#order' + order.id).append('<h3>'+order.id+'</h3>');
    $('#order' + order.id).append('<button type="button" id="order-'+order.id+'"></button>');

    // order.pizzas = [1,2,3,4]

    for (var i = 0; i < order.pizzas.length; i++) {
    $('#order' + order.id).append('<div class="pizzaIcon"></div>')
    }

    // order.pizzas.forEach(function() {
    //   $('#order' + order.id).find(".orderPizzas").append('<div class="pizzaIcon"></div>')
    // });

    $('#order-' + order.id).click(function(){
      var pizzaInfo = {toppings: []};
      $('#cloud').fadeIn();
      $('pizzaForm').fadeIn();

      $('#addTopping').click(function(){
        pizzaInfo.toppings.push($('input[type="text"]').val());
        $('input[type="text"]').val('');
      });

      $('#createPizza').click(function(){
        pizzaInfo['size'] = $('input[type="radio"]:checked')
        order.pizzas.push(new Pizza(pizzaInfo, order));
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

  // var name = prompt("hello! What's your name?");
  currentCustomer = new Customer("fred");

  for (var i = 0; i < 4; i++) {
    currentCustomer.orders.push(new Order(currentCustomer, i));
  }

  domify();





});
