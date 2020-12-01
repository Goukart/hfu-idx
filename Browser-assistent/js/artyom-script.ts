declare var Artyom: any;
const artyom = new Artyom();

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

let initialAppointment: reminder = new reminder("some appointment", 1530, "some city");


function say(_text: string): void {
  artyom.simulateInstruction(_text); //Simulate a voice  command with voice
  artyom.say(_text);
}
function sayMute(_text: string): void {
  artyom.simulateInstruction(_text);
  alert("Stopped");
}


artyom.addCommands([
  {
    indexes:["yes"],
    action:function(){
      artyom.say();
    }
  },
  {
    indexes:["stop"],
    action:function(){
      artyom.shutUp();
    }
  },
  {
    indexes:["start"],
    action:function(){
      artyom.say(`Hey Visitor, you have an apointment at 15:30, in ${initialAppointment.city}. It takes around 45min to get there. Would you like me to remind you 50min early, to get ready?`);
      console.log(`Hey Visitor, you have an apointment at 15:30, in ${initialAppointment.city}. It takes around 45min to get there. Would you like me to remind you 50min early, to get ready?`)
    }
  }
]);


window.addEventListener("load", function (): void {


  function startContinuousArtyom(): void {
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
