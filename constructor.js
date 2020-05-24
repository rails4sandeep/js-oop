/* 
Rewrite the factory function as a constructor function.
The constructor function starts with a Capital letter.
this is used. this refers to the created object.
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log("draw a circle of radius: " + this.radius);
    };
};

const circleOne = new Circle(2);
circleOne.draw();