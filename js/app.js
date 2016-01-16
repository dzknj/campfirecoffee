'use strict'; // strict coding, must defin all vars
var shopList =[]; // array for list of shops

var ShopLocation = function(location,minCust,maxCust,cupsCust,poundsCust) { // shop object constructor
  this.location = location;
  this.minCustPerHour = minCust;
  this.maxCustPerHour = maxCust;
  this.cupsPerCust = cupsCust;
  this.poundsPerCust = poundsCust;
  this.listHours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
  shopList.push(this);
  this.randomNumberOfCust = function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  };
  this.cupsPerHour = function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return (hourlyCustomer * this.cupsPerCust);
  }
  this.totalPounds = function(){
      var hourlyCustomer = this.randomNumberOfCust();
      return (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust));
  };
  this.createListItem = function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  };
  this.createUL = function(){
    var ul = document.createElement('ul');
    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li')
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.getElementById('poundsperday').appendChild(ul);
  };

};

var createTable =  function(){ // function for pounds per day table generator
  document.getElementById('poundsperday').innerHTML= ' '; // locate specific HTML location, cancel out old table so only one is shown
  var section = document.getElementById('test'); // unneeded code, here because when i was trying to duplicate the code from class, he accessed an HTML location and assigned it a variable
  var hours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = 'Location';
  tableRow.appendChild(tableHead);

  for (var i = 0; i < hours.length; i++){ // for each index of hours variable, create a tableheader with content of hours index number
    var tableHeadHours = document.createElement('th');
    tableHeadHours.textContent = hours[i];
    tableRow.appendChild(tableHeadHours);

  }
    table.appendChild(tableRow); // add the created table headers for each hour to the row
//    document.body.appendChild(table);

  for (var d = 0; d < shopList.length;d++){
    var shopTotal = 0; // variable declared to contain the data added cumulatively from each hour
    var tableRow1 = document.createElement('tr');
    var tableHead1 = document.createElement('th');
    tableHead1.textContent = shopList[d].location; // for the length of shopList put this.location into header to embolden the name of each location
    tableRow1.appendChild(tableHead1);

    for (var i = 0; i < hours.length; i++){
      var tableData1 = document.createElement('td');
      var hourlyTotal = shopList[d].totalPounds(); // for each hour 'i' go through the totalpounds function for each shop in the shoplist 'd' and create data for each location and post it to each locations own row
      shopTotal += hourlyTotal; // add each hourly totalpounds to the shoptotal for 'd' and save that variable for each row created by 'd' seperatley in order to list the shoptotal hourlypunds for each 'd' in a table head at the end of each of "d's" rows in a th that will be created after this
      tableData1.textContent = hourlyTotal.toFixed(2); // for each 'd' put the hourly data onto the table in a cell for each hour 'i'
      tableRow1.appendChild(tableData1); // for each 'd' put data onto its row
    //  console.log(i);
    }

      var tableData2 = document.createElement('td');
      tableData2.textContent = shopTotal.toFixed(2); // create a new data cell and put the cumulative adding result of all hours per day for each row 'd'
      tableRow1.appendChild(tableData2); // put that data onto each row 'd'
      table.appendChild(tableRow1); //put row on table for each 'd'
    }
    var tableHead = document.createElement('th'); // create a name on a header on first row that contains the hours and put it above the last data cell of each row 'd'
    tableHead.textContent = 'Total Daily Lbs.';
    tableRow.appendChild(tableHead);
      document.getElementById('poundsperday').appendChild(table); //locate this div in HTML file and put this table into it to replace the already deleted previous table
};
var createCustPerHourTable =  function(){
  document.getElementById('custperday').innerHTML= ' ';
  var section = document.getElementById('test');
  var hours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = 'Location';
  tableRow.appendChild(tableHead);

  for (var i = 0; i < hours.length; i++){
    var tableHeadHours = document.createElement('th');
    tableHeadHours.textContent = hours[i];
    tableRow.appendChild(tableHeadHours);

  }
    table.appendChild(tableRow);
//    document.body.appendChild(table);

  for (var d = 0; d < shopList.length;d++){
    var shopTotal = 0;
    var tableRow1 = document.createElement('tr');
    var tableHead1 = document.createElement('th');
    tableHead1.textContent = shopList[d].location;
    tableRow1.appendChild(tableHead1);

    for (var i = 0; i < hours.length; i++){
      var tableData1 = document.createElement('td');
      var hourlyTotal = shopList[d].randomNumberOfCust();
      shopTotal += hourlyTotal;
      tableData1.textContent = hourlyTotal.toFixed(2);
      tableRow1.appendChild(tableData1);
    //  console.log(i);
    }

      var tableData2 = document.createElement('td');
      tableData2.textContent = shopTotal.toFixed(2);
      tableRow1.appendChild(tableData2);
      table.appendChild(tableRow1);
    }
    var tableHead = document.createElement('th');
    tableHead.textContent = 'Total Customers Per Day';
    tableRow.appendChild(tableHead);
      document.getElementById('custperday').appendChild(table);
};
var createCupsPerHourTable =  function(){
    document.getElementById('cupsperday').innerHTML= ' ';
  var section = document.getElementById('test');
  var hours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = 'Location';
  tableRow.appendChild(tableHead);

  for (var i = 0; i < hours.length; i++){
    var tableHeadHours = document.createElement('th');
    tableHeadHours.textContent = hours[i];
    tableRow.appendChild(tableHeadHours);

  }
    table.appendChild(tableRow);
//    document.body.appendChild(table);

  for (var d = 0; d < shopList.length;d++){
    var shopTotal = 0;
    var tableRow1 = document.createElement('tr');
    var tableHead1 = document.createElement('th');
    tableHead1.textContent = shopList[d].location;
    tableRow1.appendChild(tableHead1);

    for (var i = 0; i < hours.length; i++){
      var tableData1 = document.createElement('td');
      var hourlyTotal = shopList[d].cupsPerCust *shopList[d].randomNumberOfCust();
    //  console.log(hourlyTotal);
      shopTotal += hourlyTotal;
      tableData1.textContent = hourlyTotal.toFixed(2);
      tableRow1.appendChild(tableData1);
    //  console.log(i);
    }

      var tableData2 = document.createElement('td');
      tableData2.textContent = shopTotal.toFixed(2);
      tableRow1.appendChild(tableData2);
      table.appendChild(tableRow1);
    }
    var tableHead = document.createElement('th');
    tableHead.textContent = 'Total Daily Cups';
    tableRow.appendChild(tableHead);
      document.getElementById('cupsperday').appendChild(table);
};
// creat the 6 shop objects of existing stores and website
var pikePlaceMarket = new ShopLocation('Pike Place Market',14,55,1.2,3.7);
var capitolHill = new ShopLocation('Capitol Hill',32,48,3.2,0.4);
var seattlePublic = new ShopLocation('Seattle Public Library',49,75,2.6,0.2);
var southLake = new ShopLocation('SouthLake',35,88,1.3,3.7);
var seaTac = new ShopLocation('Sea-Tac',68,124,1.1,2.7);
var website = new ShopLocation('Website',3,6,0,6.7);

//var shopList =[pikePlaceMarket,capitolHill,seattlePublic,southLake,seaTac,website];

// call all table functions
createTable();
createCustPerHourTable();
createCupsPerHourTable();

// add render method to each shoplocation object

ShopLocation.prototype.render = function() {
  var liA = document.createElement('th');
  var liR = document.createElement('tr');

  liA.innerHTML = this.location + this.minCustPerHour + this.maxCustPerHour + this.cupsPerCust + this.poundsPerCust;
  return liA;


};
//variables for DOM access

var newshoplocations = document.getElementById('newshoplocations'); //
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
  // rename and declare as variables to ease what needs to be put into new ShopLocation()<---values; i dont know why we do this as this way in essence I am actually typing more, unnecessary code
  // ps, i changed the names of the properties in the constructor for the newShopLocation ShopLocation object to test it and it works
  var nLoc = event.target.location.value;
  var nLocMinCust = parseInt(event.target.minCust.value);
  var nLocMaxCust = parseInt(event.target.maxCust.value);
  var nLocCupsCust = parseFloat(event.target.cupsCust.value);
  var nLocPoundsCust = parseFloat(event.target.poundsCust.value);

// make new ShopLocation object with info data from HTML input boxes and use parseInt to return a whole number and parseFloat to return a decimal to 2 places, or hundredths, which is set in another part of the code with toFixed(2), which rounds any number to 2 decimal places. Whatever number is between the() is how many decimal places will be logged or shown.
  var newShopLocation = new ShopLocation(event.target.location.value, parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseFloat(event.target.cupsCust.value), parseFloat(event.target.poundsCust.value));
console.log(newShopLocation);

// log various things to console to make sure they are in working order
// I do NOT need to declare the methods of shoplocation like I did below. But when I was working my way through the code originally trying to get it working I did. But i tried with and without calling these methods and they both work
  console.log('Location: ' + event.target.location.value + ' Minimum Customers per Hour: ' + event.target.minCust.value + ' Maximum Customers per Hour: ' + event.target.maxCust.value + ' Cups per each Customer: ' + event.target.cupsCust.value + ' Pounds per Customer: ' + event.target.poundsCust.value);
  newShopLocation.randomNumberOfCust();
  console.log(newShopLocation.randomNumberOfCust());
  newShopLocation.cupsPerHour();
  console.log(newShopLocation.cupsPerHour());
  newShopLocation.totalPounds();
console.log(newShopLocation.totalPounds());
  createTable();
  createCustPerHourTable();
  createCupsPerHourTable();

}

// declare newshop, which is my form, and name it variable addNewShop so I can use event listener, and get information and data from input boxes within this form
var addNewShop = document.getElementById('newShop');

// look for submit event from button click in newShop form which is under var addNewShop and than handleAddNewShop
addNewShop.addEventListener('submit', handleAddNewShop);

/*function tableHours(){
  var section = document.getElementById('test');
  var hours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = 'hours';
  tableRow.appendChild(tableHead);

  for (var i = 0; i < hours.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = hours[i];
    tableRow.appendChild(tableData);

  }
    table.appendChild(tableRow);
    document.body.appendChild(table);
  }
//my javascript wil be in here
/*var pikePlaceMarket = {
  minCustPerHour: 14,
  maxCustPerHour: 55,
  cupsPerCust: 1.2,
  poundsPerCust: 3.7,
  listHours: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
  randomNumberOfCust: function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  },
  createListItem: function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  },
  createUL: function(){
    var ul = document.createElement('ul');

    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li')
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
  },
  createTable: function(){
    var section = document.getElementById('test');
    var hours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
    var table = document.createElement('table');
    var tableRow = document.createElement('tr');
    var tableHead = document.createElement('th');
    tableHead.textContent = 'hours';
    tableRow.appendChild(tableHead);

    for (var i = 0; i < hours.length; i++){
      var tableData = document.createElement('td');
      tableData.textContent = hours[i];
      tableRow.appendChild(tableData);
      console.log(i);
    }
      table.appendChild(tableRow);
      document.body.appendChild(table);
  }
  //console.log(table);
  //document.write(table);
};
//for (var i = 6; i < 21; i++){
  //var p1 = document.createElement('p1');
  //p1.textContent = pikePlaceMarket.cupsPerHour();
  //document.body.appendChild(p1);
  //console.log(pikePlaceMarket.cupsPerHour());
//}


var capitolHill = {
  minCustPerHour: 32,
  maxCustPerHour: 48,
  cupsPerCust: 3.2,
  poundsPerCust: 0.4,
  listHours: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
  randomNumberOfCust: function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  },
  createListItem: function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  },
  createUL: function(){
    var ul = document.createElement('ul');

    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li')
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
    }
};

var seattlePublic = {
  minCustPerHour: 49,
  maxCustPerHour: 75,
  cupsPerCust: 2.6,
  poundsPerCust: 0.2,
  listHours: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
  randomNumberOfCust: function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  },
  createListItem: function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  },
  createUL: function(){
    var ul = document.createElement('ul');

    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li');
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
      }
  };


var southLake = {
  minCustPerHour: 35,
  maxCustPerHour: 88,
  cupsPerCust: 1.3,
  poundsPerCust: 3.7,
  listHours: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
  randomNumberOfCust: function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  },
  createListItem: function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  },
  createUL: function(){
    var ul = document.createElement('ul');

    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li');
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
  },
  table: function(){
    var table1 = document.createElement('table');
    var tableRow = document.createElement('tr');
    var tableHead = document.createElement('th');
    var tableCol = document.createElement('td');
  }
};

var seaTac = {
  minCustPerHour: 68,
  maxCustPerHour: 124,
  cupsPerCust: 1.1,
  poundsPerCust: 2.7,
  listHours: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
  randomNumberOfCust: function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  },
  createListItem: function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  },
  createUL: function(){
    var ul = document.createElement('ul');

    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li')
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
    }
};

var website = {
  minCustPerHour: 3,
  maxCustPerHour: 6,
  cupsPerCust: 0,
  poundsPerCust: 6.7,
  listHours: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
  randomNumberOfCust: function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  },
  createListItem: function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return hourlyCustomer + " Customers per Hour " + (hourlyCustomer * this.cupsPerCust) + " Cups Per Hour " + ((hourlyCustomer * this.cupsPerCust)/20) + " Pounds of Coffee to Make these Cups " + (hourlyCustomer*this.poundsPerCust) + " to-go lbs. " + (((hourlyCustomer*this.cupsPerCust)/20)+(hourlyCustomer*this.poundsPerCust)) + " total lbs. ";
  },
  createUL: function(){
    var ul = document.createElement('ul');

    for (var i = 0; i < this.listHours.length; i++){
      var li = document.createElement('li');
      li.textContent = this.listHours[i] + " " + this.createListItem();
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
      }
  };
*/
