var Item = function(name,age,hair) {
  this.name = name;
  this.age = age;
  this.hair = hair;
  this.attributes = ['name','age','hair'];
  this. createTable = function() {
    var table = document.getElementById('table');
    var tableRow = document.getElementById('tr');
    var tableHead = document.getElementById('th');
    tableHead.textContent = 5;
    tableRow.appendChild(tableHead);

    for (var i = 0; i < this.attributes.length; i++){
      var tableHead = document.getElementById('th');
      tableHead.textContent = this.attributes[i];
      tableRow.appendChild(tableHead);
    }
      table.appendChild(tableRow);
  };
};

var Dave = new Item('dave',30,'red');
