var CarLot = (function (aug) {

  function toggleChanges (clickEvent) {
      textBar.focus();
    if (clickEvent.target.className === "card") {
      cardClick.classList.toggle("card-changes");
    }
  }

  return aug;

}(CarLot || {}));