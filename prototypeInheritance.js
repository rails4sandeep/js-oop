function Place() {
    
}

Place.prototype.airportCode = function(code) {
    console.log('Airport code is: ' + code);
}


function City(cityName) {
    this.name = cityName;
}

City.prototype.railwayStateCode = function(code) {
    console.log('Railway station code is: ' + code);
}

City.prototype = Object.create(Place.prototype);
const vijayawada = new City('Vijayawada');
vijayawada.airportCode('VGA');
vijayawada.railwayStateCode('BZA');

