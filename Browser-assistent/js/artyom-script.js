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
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Hallo *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Name: " + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
    function start() {
        var initialAppointment = new reminder("some appointment", 1530, "some city");
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
        //artyom.say("Hey Visitor, "); //you have an apointment at 15:30 in ${initialAppointment.city}. It takes around 45min to get there. Would you like me to remind you 50min early, to get ready?
    }
});
//# sourceMappingURL=artyom-script.js.map
