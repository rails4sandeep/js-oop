/* 
    An example of calling inherited function constructor
    SuperFunction.call(this,objectToBeSet)
 */
function Place(type) {
    this.type = type;
}

Place.prototype.airportCode = function(code) {
    console.log('Airport code is: ' + code);
}

function City(cityName, type) {
    Place.call(this, type)
    this.name = cityName;
}

City.prototype = Object.create(Place.prototype);

City.prototype.railwayStateCode = function(code) {
    console.log('Railway station code is: ' + code);
}

const sydney = new City('Sydney', 'City');
sydney.railwayStateCode('SYD');



