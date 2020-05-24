function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log("draw a circle of radius: " + this.radius);
    };
};

const circle = new Circle(25);

for(key in circle) {
    console.log(key, circle[key]);
}

for(key in circle) {
    if(typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    }
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle) {
    console.log('yes')
}

