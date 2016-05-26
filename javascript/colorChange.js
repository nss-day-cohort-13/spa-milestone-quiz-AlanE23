var CarLot = (function (aug) {

  aug.toggleChanges = function(clickEvent) {
    var cardPicked = clickEvent.target.parentNode.parentNode;
    if (cardPicked.classList.contains("card")) {
      cardPicked.classList.toggle("changes");
    }
  }
  return aug;

}(CarLot || {}));