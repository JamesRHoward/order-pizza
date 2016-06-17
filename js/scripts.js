// Business/front end logic.
function Pizza(size, topping) {
  this.psize = size;
  this.topping = topping;
  this.price = 20;
}

Pizza.prototype.pizzaPrice = function(){
  if (this.psize === "12" && this.topping === "toppings") {
    return this.price -= 10;
  } else if (this.psize === "16" && this.topping === "toppings") {
    return this.price -= 6;
  } else if (this.psize === "18" && this.topping === "toppings") {
    return this.price -= 4;
  }
  return this.price;
}
