function populatePage (inventory) {

  var domLoad = document.getElementById("cardArea");

  // Loop over the inventory and populate the page
  for (i = 0; i < inventory.length; i++) {
    console.log("inventory", inventory);

    domLoad.innerHTML += "<div class='card col-sm-4' style='border: solid " + inventory[i].color + " 2px'>" +
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
}

// Now that the DOM is loaded, establish all the event listeners needed
// CarLot.activateEvents();

function activateEvents() {
  var userInput = document.getElementById("userInput"); // grabs the user's input

  var cardClick = document.getElementById("cardClick"); // toggles change border width/color and background change as well
  cardClick.addEventListener("change", toggleChanges);  // as move cursor and clear text box

}


// Load the inventory and send a callback function to be invoked after the process is complete
CarLot.loadInventory();
