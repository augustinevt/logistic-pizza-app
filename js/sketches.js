// var info = {toppings: [1,2,3,4], size: "large"}
//
// function Pizza(obj) {
//   for(var key in obj) {
//     this[key] = obj[key];
//   }
// }
//
// var pizzaObject = new Pizza(info);
//
// console.log(pizzaObject);

function BillingInfo(cardNumber, cardName) {
  this.cardNumber = cardNumber;
  this.cardName = cardName;
}


function Address(string) {
  this.stringAddress = string;
}

function Pizza(obj, order) {
  for(var key in obj) {
    this[key] = obj[key];
  }
  this.order = order;
}

function Customer(name) {
  this.orders = [];
  this.name = name;
  this.address = [];
  this.billing = {};
}

Customer.prototype.newOrder = function() {
  var newOrder = new Order(this);
  return newOrder;
}


function Order(customer, id) {
  this.customer = customer;
  this.pizzas = [];
  this.addresses = {};
  this.id = id;
}

Order.prototype.newPizza = function(pizzaInfo){
  return new Pizza(pizzaInfo, this);
}

Order.prototype.total = function(){
  var total = 0;
  this.pizzas.map(function(pizza){
    total += (pizza.toppings.length * 1.50)
    if (pizza.size === 'large'){
      total += 10;
    }else if (pizza.size === 'medium'){
      total += 8;
    }else{
      total += 5;
    }
  });
  return total;
}

// var order = new Order();
//
// order.pizzas.push({ size: "large", toppings: [1,2,3,4,5]});
//
// var orderTotal = order.total();
//
// console.log(orderTotal);
