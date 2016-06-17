// Business/front end logic.
function Pizza(size, topping) {
  this.psize = size;
  this.topping = topping;
  this.price = 20;
}

Pizza.prototype.pizzaPrice = function(){
  if (this.psize === "12" && this.topping === "bacon") {
    return this.price -= 10;
  } else if (this.psize === "16" && this.topping === "toppings") {
    return this.price -= 6;
  } else if (this.psize === "18" && this.topping === "toppings") {
    return this.price -= 4;
  }
  return this.price;
}

// User Interface/back end logic.
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();
    var toppings = $("select#toppings").val();
    var newPizza = new Pizza(size, toppings);
    newPizza.pizzaPrice();

    $(".size").text(newPizza.size);
    $(".toppings").text(newPizza.topping);
    $(".price").text(newPizza.price);
    $("#results").show();
  })
})
