function populatePage (inventory) {

  var domLoad = document.getElementById("cardArea");

  var looper = "";

  // Loop over the inventory and populate the page

  for (i = 0; i < inventory.length; i++) {
    console.log("inventory", inventory);

    looper += "<div class='card col-xs-4' style='border-color:" + inventory[i].color + "'>" +
                         "<div class='picDiv'>" +
                         "<img src='" + inventory[i].image + "'>" +
                         "</div>" +
                         "<div class='cardText'>" +
                         "<p>" + "-Make: " + inventory[i].make + "</p>" +
                         "<p>" + "-Model : " + inventory[i].model + "</p>" +
                         "<p>" + "-Year : " + inventory[i].year + "</p>" +
                         "<p>" + "-Price : " + inventory[i].price + "</p>" +
                         "<p>" + "-Color : " + inventory[i].color + "</p>" +
                         "<p class='about'>" + "-About : " + inventory[i].description + "</p>" +
                         "</div>" +
                         "</div>";
  }
  domLoad.innerHTML = looper;
}
// Now that the DOM is loaded, establish all the event listeners needed

var userText = document.getElementById("textBar"); // grabs the user's input
userInput.addEventListener("keyup", validateKeyup);    // Listens for keyup; runs function to validate for return key

// validateKeyup() - Callback from userInput
// When any key press is heard in the user text input,
// this function checks to see if the key was "return/enter".
// If "return", it runs msgSubmit().

function validateKeyup(key) {
  if (key.which === 13) {
    msgSubmit();
  }
}

var cardClick = document.getElementById("cardArea");

cardClick.addEventListener("click", function(clickEvent) {
  console.log("cardClick", cardClick);
  console.log("cardTarget", clickEvent.target);

  var kidsCardClick = document.getElementsByClassName("card")
  console.log("kidsCardClick1", kidsCardClick);

  for (i = 0; i < kidsCardClick.length; i++) {
    kidsCardClick[i].classList.remove("changes");
  }

  CarLot.activateEvents(clickEvent);
  CarLot.toggleChanges(clickEvent);
  console.log("kidsCardClick2", kidsCardClick);

});

// Load the inventory and send a callback function to be invoked after the process is complete

CarLot.loadInventory();


// div is an object reference to a <div> element with class="foo bar"
// div.classList.remove("foo");