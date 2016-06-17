var info = {toppings: [1,2,3,4], size: "large"}

function Pizza(obj) {
  for(var key in obj) {
    this[key] = obj[key];
  }
}

var pizzaObject = new Pizza(info);

console.log(pizzaObject);
