//constructor for each shop location
var ShopLocation = function(location,minCust, maxCust, cupsCust, poundsCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cupsCust = cupsCust;
  this.poundsCust = poundsCust;
};

ShopLocation.prototype.render = function() {
  var liA = document.createElement('table');
  liA.innerHTML = this.location + this.minCust + this.maxCust + this.cupsCust + this.poundsCust;
  return liA;
};
//variables for DOM access
var addNewShop = document.getElementById('addNewShop');
var newshoplocations = document.getElementById('newshoplocations');
var newShopData = [];

var renderNewShops = function() {
    addNewShop.innerHTML = ' ';
    newShopData.forEach(function(ShopLocation) {
      addNewShop.appendChild(ShopLocation.render());
      });
};

function handleAddNewShop(event) {
  console.log(event);
  event.preventDefault(); //prevents page reload

  if (!event.target.location.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.cupsCust.value || !event.target.poundsCust.value) {
    return alert('Fields Cannot Be Empty');
  }
  var nLoc = event.target.location.value;
  var nLocMinCust = event.target.minCust.value;
  var nLocMaxCust = event.target.maxCust.value;
  var nLocCupsCust = event.target.cupsCust.value;
  var nLocPoundsCust = event.target.poundsCust.value;


  var newShopLocation = new ShopLocation(nLoc, nLocMinCust, nLocMaxCust, nLocCupsCust, nLocPoundsCust);

  console.log('Location: ' + event.target.location.value + ' Minimum Customers per Hour: ' + event.target.minCust.value + ' Maximum Customers per Hour: ' + event.target.maxCust.value + ' Cups per each Customer: ' + event.target.cupsCust.value + ' Pounds per Customer: ' + event.target.poundsCust.value);

  newShopData.push(newShopLocation);
  renderNewShops();
}
