function Circle(radius) {
    this.radius = radius;
    let atmosphere = "hot";
    let city = "Vijayawada";
    this.draw = () => {
        console.log("draw a circle of radius: " + this.radius);
    };

    this.weather = () => {
        console.log("the atmosphere is: " + atmosphere);
    };

    this.cityCircle = () => {
        console.log("the city for this circle is: " + city);
    };
};

const circle = new Circle(25);
circle.draw();
circle.weather();
circle.cityCircle();

