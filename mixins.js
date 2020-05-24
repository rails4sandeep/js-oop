function mixin(target, ...sources) {
    Object.assign(target,...sources);
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Audio(name) {
    this.name = name;
    
}

Audio.prototype.brand = function() {
    console.log("the brand name is " + this.name);
}

const canPlayMusic = {
    music: () => {
        console.log("can play music");
    }
}

const canTakeCalls = {
    calls: () => {
        console.log("can use to take calls");
    }
}

mixin(Audio, canPlayMusic, canTakeCalls);


function Headphone() {

}

function Speaker() {

}

extend(Headphone, Audio);
extend(Speaker, Audio);

const audioTechnica = new Headphone('Audio Technica');
const yamaha = new Speaker("Yamaha");
audioTechnica.brand();
audioTechnica.canPlayMusic;
audioTechnica.canTakeCalls;

yamaha.brand();
yamaha.canPlayMusic;
yamaha.canTakeCalls;