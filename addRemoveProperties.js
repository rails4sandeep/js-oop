function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log("draw a circle of radius: " + this.radius);
    };
};


const c1 = new Circle(25);

//add a new property to an object
c1.location = "Vijayawada";

//remove a property from an object
delete c1.location;
