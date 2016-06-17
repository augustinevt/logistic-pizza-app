//
//
//BLALALLALALALAAL
// ////////
//
// function getAddress() {
//   var address = prompt('please fill in address');
//   return new Address(address);
// }
//
// function pizzaQue(currentOrder) {
//   alert("this is the start of PizzaQue");
//   var pizzaInfo = {};
//   var toppings = [];
//   var size = prompt('what size would you like it?');
//   pizzaInfo['size'] = size;
//   while(true){
//     var topping = prompt('what to you want on it?');
//     toppings.push(topping);
//     if(topping === ''){
//       pizzaInfo['toppings'] = toppings;
//       var newPizza = new Pizza(pizzaInfo);
//       currentOrder.pizzas.push(newPizza);
//       break;
//     }
//   }
//   alert("push Pizza!");
//   var addPizza = prompt('add a pizza?');
//   if(addPizza === "yes") {
//     pizzaQue(currentOrder);
//   }else{
//     return;
//   }
// }
//
// function orderQue() {
//   alert("this is the start of orderQue");
//   currentOrder = currentCustomer.newOrder();
//   pizzaQue(currentOrder);
//   currentOrder.address = getAddress();
//   currentCustomer.orders.push(currentOrder);
//   var addOrder = prompt('add an order?');
//   if (addOrder === 'yes') {
//     orderQue();
//   }else{
//     return;
//   }
// }
//
// function getBilling() {
//   var cardNum = prompt("creditCard");
//   var fullName = prompt('Name on Card');
//   return new BillingInfo(cardNum, fullName);
// }
//
//
// $(function() {
//   var name = prompt("hello! What's your name?");
//   currentCustomer = new Customer(name);
//   orderQue(currentCustomer);
//   currentCustomer.billing = getBilling();
// });
