function Pizza(obj) {
  for(var key in obj) {
    this[key] = obj[key];
  }
}


////////

function getAddress() {
  var address = prompt('please fill in address');
}

function pizzaQue() {
  alert("this is the start of PizzaQue");
  var pizzaInfo = {};
  var toppings = [];
  var size = prompt('what size would you like it?')
  pizzaInfo['size'] = size;
  while(true){
    var topping = prompt('what to you want on it?')
    toppings.push(topping);
    if(topping === ''){
      pizzaInfo['toppings'] = toppings;
      var newPizza = new Pizza(pizzaInfo);
      console.log(currentPizza);
      //add newPizza to order.pizzas
      break;
    }
  }
  alert("push Pizza!");
  var addPizza = prompt('add a pizza?');
  if(addPizza === "yes") {
    pizzaQue();
  }else{
    return;
  }
}

function orderQue() {
  alert("this is the start of orderQue");
  pizzaQue();
  var addOrder = prompt('add an order?');
  if (addOrder === 'yes') {
    orderQue();
  }else{
    return;
  }
}


$(function() {
  prompt("hello! What's your name?");
  orderQue();

});
