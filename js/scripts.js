// Business/front end logic.
function Pizza(size, topping, topping2, topping3) {
  this.psize = size;
  this.topping = topping;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 20;
}
Pizza.prototype.toppingPrice = function() {
  if (this.topping === "bacon" || this.topping === "canadian-bacon" || this.topping === "pepperoni" || this.topping === "bbq" || this.topping === "sausage") {
    this.price +=1;
  } if (this.topping2 === "bacon" || this.topping2 === "canadian-bacon" || this.topping2 === "pepperoni" || this.topping2 === "bbq" || this.topping2 === "sausage") {
    this.price +=1;
  } if (this.topping3 === "bacon" || this.topping3 === "canadian-bacon" || this.topping3 === "pepperoni" || this.topping3 === "bbq3" || this.topping3 === "sausage") {
    this.price +=1;
  }
  return this.price;
}

Pizza.prototype.sizePrice = function() {
  if (this.psize === "12") {
    return this.price -= 10;
  } else if (this.psize === "16") {
    return this.price -= 6;
  } else if (this.psize === "18") {
    return this.price -= 4;
  }
  return this.price;
}

Pizza.prototype.pizzaPrice = function() {
  this.psize + this.topping + this.topping2 + this.topping3;
}

// User Interface/back end logic.
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();
    var topping1 = $("select.toppings1").val();
    var topping2 = $("select.toppings2").val();
    var topping3 = $("select.toppings3").val();
    var newPizza = new Pizza(size, topping1, topping2, topping3);
    newPizza.pizzaPrice();
    newPizza.toppingPrice();
    newPizza.sizePrice();

    $(".size").text(newPizza.psize);
    $(".toppings1").text(newPizza.topping);
    $(".toppings2").text(newPizza.topping2);
    $(".toppings3").text(newPizza.topping3);
    $(".price").text(newPizza.price);
    $("#results").show();
  })
})
