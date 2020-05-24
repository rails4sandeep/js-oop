/* Two examples of method overriding.
One, redefining the function in the Child class.
Two, calling the Parent class function using
Child.prototype.function(this, argument) */
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Place(type) {
    this.type = type;
}

Place.prototype.airportCode = function(code) {
    console.log('Airport code is: ' + code);
}

Place.prototype.railwayStateCode = function(code) {
    console.log('Railway station code is: ' + code);
}

function City(cityName, type) {
    Place.call(this, type)
    this.name = cityName;
}

extend(City, Place);

City.prototype.railwayStateCode = function(code) {
    Place.prototype.railwayStateCode.call(this,code);
}

City.prototype.airportCode = function(code) {
    console.log('Duplicate Airport code is: ' + code);
}

const sydney = new City('Sydney', 'City');
sydney.railwayStateCode('Sydney Station');
sydney.airportCode('Sydney Airport')
