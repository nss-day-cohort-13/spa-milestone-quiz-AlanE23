var CarLot = (function (xhr) {

  var inventory = [];
  var carID = 0;

  var inventoryLoader = new XMLHttpRequest();
  inventoryLoader.addEventListener("load", getInventory);
  inventoryLoader.open("GET", "inventory.json");
  inventoryLoader.send();

  function getInventory () {
     var cars = JSON.parse(this.responseText);

    for (i = 0; i < data.cars.length; i++) {
      cars.push(data.inventory[i]);
    }
  }

  xhr.getInventory = function () {
    return inventory;
  }

  return xhr

}(CarLot || {}));

// var CarLot = (function (xhr) {

//   var inventoryJson = [];

//   var inventoryLoader = new XMLHttpRequest();
//   inventoryLoader.addEventListener("load", getCars);
//   inventoryLoader.open("GET", "inventory.json");
//   inventoryLoader.send();

//   function getCars () {
//     var cars = JSON.parse(this.responseText);
//     for (i = 0; i < data.cars.length; i++) {
//       inventory.push(data.inventory[i]);
//       CarLot.addCars(inventoryJson[i])
//     }
//   }

//   xhr.getInventory = function () {
//     return inventoryJson;
//   }


//   return xhr;

// }(CarLot || {}));