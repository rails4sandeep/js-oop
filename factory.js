
circleFactory = (radius) => {
    return {
        radius,
        draw: () => {
            console.log("draw circle of radius");
        }
    };
}

const circleOne = circleFactory(2);
const circleTwo = circleFactory(3);
circleOne.draw();