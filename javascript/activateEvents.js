var CarLot = (function (aug) {

  aug.activateEvents = function(clickEvent) {

    var cardPicked = clickEvent.target.parentNode.parentNode;
    console.log("cardPicked", cardPicked);


  };

  return aug

}(CarLot || {}));


  // var cardPicked = clickFocus.target.parentNode.parentNode;
  //   if (cardPicked.classList.contains("card")) {
  //     var id = cardPicked.id;
  //     cardAbout = cardPicked.querySelector(".about");
  //     textBar.focus();
  //     textBar.value = cardAbout.innerHTML;
    // }


    // var id = cardPicked.id;
    //   cardAbout = cardPicked.querySelector(".about");
    //   textBar.focus();
    //   textBar.value = cardAbout.innerHTML;


  //   function(clickEvent) {

  // var containerDiv = clickEvent.target.parentNode.parentNode.parentNode;
  // console.log("containerDiv", containerDiv.childNodes);

  // if (containerDiv.childNodes.classList.contains("card-changes")){

  //     containerDiv.childNodes.classList.toggle("card");

  //     CarLot.activateEvents();

  //     CarLot.toggleChanges();

  // } else {

  //   CarLot.activateEvents();

  //   CarLot.toggleChanges();

  // }