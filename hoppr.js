var addHopDrop = document.getElementById('addHopDrop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = allHops[i];
  addHopDrop.appendChild(option);
};
function handleAddHopProfile(event) {
  console.log(event);
  event.preventDefault();

  var addHopName = event.target.name.value;
  var addHopAlpha = event.target.AlphaAcid.value;
  var addHopCitrus = event.target.Citrus.value;
  var addHopFruity = event.target.Fruity.value;
  var addHopPiney = event.target.Piney.value;
  var addHopSpicy = event.target.Spicy.value;
  var addHopFloral = event.target.Floral.value;

  var newHop = new Hops(addHopName, addHopAlpha, addHopCitrus, addHopFruity, addHopPiney, addHopSpicy, addHopFloral);
  console.log(newHop);
  allHops.push(newHop);
};

var addHopProfile = document.getElementById('addhopprofile');
 addHopProfile.addEventListener('submit',handleAddHopProfile);
