/* 
An example of prototypes. How behaviours can be added later to the object. 
The example shows how the prototype functions have access to the object.
 */
function City (cityName) {
    this.name = cityName;

    this.airportCode = (code) => {
        console.log('Airport code is: ' + code);
    }

    // this.toString = function() {
    //     return 'the city name is ' + this.name;
    // }
}

City.prototype.railwayStateCode = (code) => {
    console.log('Railway station code is: ' + code);
}

City.prototype.toString = function() {
    return 'the city name is: ' + this.name;
}

const vijayawada = new City('Vijayawada');
console.log(Object.keys(vijayawada)); // prints only [ 'name', 'airportCode' ]

for(key in vijayawada) {
    console.log(key, vijayawada[key]);
    /* 
    prints all:
    name
    airportCode
    railwayStateCode
    toString
     */
}



