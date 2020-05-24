function City (name) {
    this.name = name;

    this.airportCode = (code) => {
        console.log('Airport code is: ' + code);
    }
}

City.prototype.railwayStateCode = (code) => {
    console.log('Railway station code is: ' + code);
}

City.prototype.toString = () => {
     return `the city name is: ${this.name}`;
}
const vijayawada = new City('Vijayawada');
vijayawada.airportCode('VGA')
vijayawada.railwayStateCode('BZA')
new City('Visakhapatnam').airportCode('VSKP');
new City('Visakhapatnam').railwayStateCode('VSKP');

let tirupati = new City('Tirupati');
let name = tirupati.toString();
console.log(name);

