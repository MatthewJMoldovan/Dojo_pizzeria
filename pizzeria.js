function pizzaOven(crustType, sauceType, cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional",["mozzarella"], ["pepperoni","sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara",["mozzarella", "feta"], ["mushrooms","olives","onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "white sauce",["mozzarella", "feta"], ["bacon", "jalapenos"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin crust", "barbeque",["mozzarella"], ["pinapple","bacon", "momma's hot peppers", "mike's hot honeys"]);
console.log(pizza4);