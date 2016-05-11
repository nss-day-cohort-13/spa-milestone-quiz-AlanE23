var CarLot = (function (xhr) {

  var inventory = [];
  var carID = 0;

  function getInventory () {
    var carList = JSON.parse(this.responseText);

    for (i = 0; i < carList.cars.length; i++) {
      inventory.push(carList.cars[i]);
      console.log("carList", carList);
      // console.log("inventory", inventory[i]);
    }
    populatePage(inventory)
  }

  xhr.loadInventory = function() {
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.addEventListener("load", getInventory);
    inventoryLoader.open("GET", "javascript/inventory.json");
    inventoryLoader.send();
  }

return xhr


}(CarLot || {}));