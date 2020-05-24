function Circle(radius) {
    this.radius = radius;
    let weather = "hot";
    let city = "Vijayawada";
    this.draw = () => {
        console.log("draw a circle of radius: " + this.radius);
    };

    Object.defineProperty(this,'weather', {
        get: () => {
            return weather;
        },
        set: (value) => {
            weather = value;
        }
    });

    Object.defineProperty(this,'city',{
        get: () => {
            return city;
        },
        set: (value) => {
            city = value;
        }
    });

};

const circle = new Circle(25);
circle.city = "Visakhapatnam";
console.log(circle.city);