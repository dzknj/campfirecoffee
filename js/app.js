//my javascript wil be in here
var pikePlaceMarket = {
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
  }
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
  custPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
  } ,
  cupsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.cupsPerCust + " Cups Per Hour";
  },
  poundsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.poundsPerCust + " Pounds Per Hour";
  }
};

var seattlePublic = {
  minCustPerHour: 49,
  maxCustPerHour: 75,
  cupsPerCust: 2.6,
  poundsPerCust: 0.2,
  cupsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.cupsPerCust + " Cups Per Hour";
  },
  poundsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.poundsPerCust + " Pounds Per Hour";
  }
};


var southLake = {
  minCustPerHour: 35,
  maxCustPerHour: 88,
  cupsPerCust: 1.3,
  poundsPerCust: 3.7,
  cupsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.cupsPerCust + " Cups Per Hour";
  },
  poundsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.poundsPerCust + " Pounds Per Hour";
  }
};


var seaTac = {
  minCustPerHour: 68,
  maxCustPerHour: 124,
  cupsPerCust: 1.1,
  poundsPerCust: 2.7,
  cupsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.cupsPerCust + " Cups Per Hour";
  },
  poundsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.poundsPerCust + " Pounds Per Hour";
  }
};


var website = {
  minCustPerHour: 3,
  maxCustPerHour: 6,
  cupsPerCust: 0,
  poundsPerCust: 6.7,
  cupsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.cupsPerCust + " Cups Per Hour";
  },
  poundsPerHour: function(){
    var hourlyCustomer = Math.floor(Math.random()*((this.maxCustPerHour-this.minCustPerHour)+1)+this.minCustPerHour);
    return hourlyCustomer * this.poundsPerCust + " Pounds Per Hour";
  }
};
