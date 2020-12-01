var artyom = new Artyom();
var reminder = /** @class */ (function () {
    function reminder(_name, _time, _city) {
        this.name = _name;
        this.time = _time;
        this.city = _city;
    }
    reminder.prototype.getTime = function () {
        return Math.floor(this.time / 100) + ":" + (this.time % 60);
    };
    return reminder;
}());
var initialAppointment = new reminder("some appointment", 1530, "some city");
function say(_text) {
    artyom.simulateInstruction(_text); //Simulate a voice  command with voice
    artyom.say(_text);
}
function sayMute(_text) {
    artyom.simulateInstruction(_text);
    alert("Stopped");
}
artyom.addCommands([
    {
        indexes: ["yes"],
        action: function () {
            artyom.say();
        }
    },
    {
        indexes: ["stop"],
        action: function () {
            artyom.shutUp();
        }
    },
    {
        indexes: ["start"],
        action: function () {
            artyom.say("Hey Visitor, you have an apointment at 15:30, in " + initialAppointment.city + ". It takes around 45min to get there. Would you like me to remind you 50min early, to get ready?");
            console.log("Hey Visitor, you have an apointment at 15:30, in " + initialAppointment.city + ". It takes around 45min to get there. Would you like me to remind you 50min early, to get ready?");
        }
    }
]);
window.addEventListener("load", function () {
    function startContinuousArtyom() {
        artyom.fatality();
        start();
    }
    startContinuousArtyom();
    function start() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "en-GB",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
});
