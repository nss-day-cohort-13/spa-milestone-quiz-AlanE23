var CarLot = (function (aug) {

  aug.toggleChanges = function(clickEvent) {
    var cardPicked = clickEvent.target.parentNode.parentNode;
    if (cardPicked.classList.contains("card")) {
      cardPicked.classList.toggle("changes");
    }
  }
  return aug;

}(CarLot || {}));







// breadChoice.addEventListener("change", function(event) {

//   // Get the value chosen from the DOM
//   var bread = breadChoice.value;

//   // Determine the price of the topping chosen
//   var breadPrice = SandwichMaker.addBread(bread);

//   // Add the topping to the SandwichMaker to increase the total price
//   finalSandwichPrice += breadPrice;
//   checkout.innerHTML = finalSandwichPrice.toFixed(2);
// });

// cheeseChoice.addEventListener("change", function(event) {

//   // Get the value chosen from the DOM
//   var cheeseSelector = event.target;
//   console.log("cheeseSelector", cheeseSelector);
//   if(cheeseSelector.checked) {
//     finalSandwichPrice += SandwichMaker.addCheese(cheeseSelector.value);
//     console.log("cheese selected", cheeseSelector.value);
//   } else {
//     finalSandwichPrice -= SandwichMaker.addCheese(cheeseSelector.value);
//     console.log("unselected", cheeseSelector.value);
//   }
//   checkout.innerHTML = finalSandwichPrice.toFixed(2);
// });