function mixin(target, ...sources) {
    Object.assign(target,...sources);
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Audio() {
}

Audio.prototype.brand = function(name) {
    console.log("the brand name is great " + name);
}

const canPlayMusic = {
    music: function() {
        console.log("can play music");
    }
}


const canTakeCalls = {
    calls: function() {
        console.log("can use to take calls");
    }
} 

mixin(Audio, canPlayMusic, canTakeCalls);



function Headphone() {

}

function Speaker() {

}

//extend(Headphone, Audio);
//extend(Speaker, Audio);
mixin(Headphone, canPlayMusic, canTakeCalls);
mixin(Speaker, canPlayMusic, canTakeCalls);

const audioTechnica = new Headphone();
const yamaha = new Speaker();

audioTechnica.canPlayMusic;
audioTechnica.canTakeCalls;


