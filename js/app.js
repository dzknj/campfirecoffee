'use strict';

var ShopLocation = function(location,minCust,maxCust,cupsCust,poundsCust) {
  this.location = location;
  this.minCustPerHour = minCust;
  this.maxCustPerHour = maxCust;
  this.cupsPerCust = cupsCust;
  this.poundsPerCust = poundsCust;
  this.listHours = ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];
  this.randomNumberOfCust = function(){
    return Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  };
  this.cupsPerHour = function(){
    var hourlyCustomer = this.randomNumberOfCust();
    return (this.hourlyCustomer * this.cupsPerCust);
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

var createTable =  function(){
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
      var hourlyTotal = shopList[d].totalPounds();
      shopTotal += hourlyTotal;
      tableData1.textContent = hourlyTotal.toFixed(2);
      tableRow1.appendChild(tableData1);
      console.log(i);
    }

      var tableData2 = document.createElement('td');
      tableData2.textContent = shopTotal.toFixed(2);
      tableRow1.appendChild(tableData2);
      table.appendChild(tableRow1);
    }
    var tableHead = document.createElement('th');
    tableHead.textContent = 'Total Daily Lbs.';
    tableRow.appendChild(tableHead);
      document.getElementById('poundsperday').appendChild(table);
};
var createCustPerHourTable =  function(){
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
      console.log(i);
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
      console.log(hourlyTotal);
      shopTotal += hourlyTotal;
      tableData1.textContent = hourlyTotal.toFixed(2);
      tableRow1.appendChild(tableData1);
      console.log(i);
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

var pikePlaceMarket = new ShopLocation('Pike Place Market',14,55,1.2,3.7);
var capitolHill = new ShopLocation('Capitol Hill',32,48,3.2,0.4);
var seattlePublic = new ShopLocation('Seattle Public Library',49,75,2.6,0.2);
var southLake = new ShopLocation('SouthLake',35,88,1.3,3.7);
var seaTac = new ShopLocation('Sea-Tac',68,124,1.1,2.7);
var website = new ShopLocation('Website',3,6,0,6.7);

var shopList =[pikePlaceMarket,capitolHill,seattlePublic,southLake,seaTac,website];
createTable();
createCustPerHourTable();
createCupsPerHourTable();

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
