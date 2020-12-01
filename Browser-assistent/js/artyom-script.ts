declare var Artyom: any;

class reminder {
  public readonly name: string;
  public readonly time: number;
  public readonly city: string;

  constructor(_name: string, _time: number, _city: string){
    this.name = _name;
    this.time = _time;
    this.city = _city;
  }

  public getTime(): string{
    return Math.floor(this.time / 100) + ":" + (this.time % 60);
  }
}


window.addEventListener("load", function (): void {
  const artyom = new Artyom();


  artyom.addCommands({
      indexes: ["Hallo *"],
      smart: true,
      action: function(i: any, wildcard: string): void {
          console.log("Name: " + wildcard);
      }
  });

  function startContinuousArtyom(): void {
      artyom.fatality();

      setTimeout(
          function(): void {
              artyom.initialize({
                  lang: "de-DE",
                  continuous: true,
                  listen: true,
                  interimResults: true,
                  debug: true
              }).then(function(): void {
                  console.log("Ready!");
              });
          },
          250);
  }

  startContinuousArtyom();

  function start() {
    let initialAppointment: reminder = new reminder("some appointment", 1530, "some city");

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
