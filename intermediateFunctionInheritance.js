/* using an intermediate function extend to 
replace prototypical inheritance and 
resetting the constructor back to the child */

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

function City(cityName, type) {
    Place.call(this, type)
    this.name = cityName;
}

extend(City, Place);

City.prototype.railwayStateCode = function(code) {
    console.log('Railway station code is: ' + code);
}

const sydney = new City('Sydney', 'City');
sydney.railwayStateCode('SYD');
