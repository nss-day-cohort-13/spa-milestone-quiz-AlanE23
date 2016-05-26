var CarLot = (function (aug) {

  aug.activateEvents = function(clickEvent) {

    var cardPicked = clickEvent.target.parentNode.parentNode;
    console.log("cardPicked", cardPicked);

    cardAbout = cardPicked.querySelector(".about");
    console.log("cardAbout", cardAbout);
    textBar.focus();
    textBar.value = cardAbout.innerHTML;



  };

  return aug

}(CarLot || {}));

// When card element is selected,
  // the text input auto populates with the description of the selected car
  // function textInputFocusEvent(event) {
  //   var cardSelected = event.target.parentNode; // parentNode is the div built in js
  //   if (cardSelected.tagName.toLowerCase() === "div") { //tagName is the html element itself
  //     id = cardSelected.id; // id is now the cards index of whichever card is clicked
  //     cardDescription = cardSelected.querySelector(".description"); // this targets the class="description" by using the querySelector, class added into quiz.js inside the description part
  //     textInput.focus(); // this puts the focus on the input field
  //     textInput.value = cardDescription.innerHTML; // last, the value typed into the input field is now equal to the text in the cardDescription
  //   }
  // }