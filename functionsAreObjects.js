function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log("draw a circle of radius: " + this.radius);
    };
};

const Circle1 = new Function('radius', `    this.radius = radius;
this.draw = () => {
    console.log("draw a circle of radius: " + this.radius);
};
`)

circle = new Circle1(25);
circle.draw();

Circle.call({},25);
Circle.apply({}, [35]);