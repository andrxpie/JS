var time = {
  seconds: 59,
  minutes: 59,
  hours: 10,

  ShowTime: function () {
    let timeSTR = "";
  
    if (this.hours < 10) timeSTR += `0${this.hours}:`;
    else timeSTR += `${this.hours}:`;
  
    if (this.minutes < 10) timeSTR += `0${this.minutes}:`;
    else timeSTR += `${this.minutes}:`;
  
    if (this.seconds < 10) timeSTR += `0${this.seconds}`;
    else timeSTR += `${this.seconds}`;
  
    console.log(timeSTR);
  },

  ValidateTime: function () {
    if (this.seconds >= 60) {
        this.minutes += Math.round(this.seconds / 60);
        this.seconds = this.seconds % 60;
    } else if (this.seconds < 0) {
        this.minutes -= Math.round(Math.abs(this.seconds / 60));
      if (Math.abs(this.seconds % 60) == 0) this.seconds = 0;
      else this.seconds = 60 - Math.abs(this.seconds % 60);
    }
  
    if (this.minutes >= 60) {
        this.hours += Math.round(this.minutes / 60);
        this.minutes = this.minutes % 60;
    } else if (this.minutes < 0) {
        this.hours -= Math.round(this.minutes / 60);
      if (Math.abs(this.minutes % 60) == 0) this.minutes = 0;
      else this.minutes = 60 - Math.abs(this.minutes % 60);
    }
  },

  PushSec: function () {
    this.seconds++;
    this.ValidateTime();
  },

  PopSec: function () {
    this.seconds--;
    this.ValidateTime();
  }
};

var car = {
  Brand: "Audi",
  Model: "RS 7",
  Year: 2024, // y.
  AvgSpeed: 290, // kmph

  ShowPassport: function () {
    console.log(`${this.Brand} ${this.Model} ${this.Year}y. ${this.AvgSpeed}kmph`);
  },

  CalculateTime: function (distance) {
    let time = distance / this.AvgSpeed;

    if (time > 4)
      time += Math.floor(time / 4);

    console.log(`${time.toFixed(2)} hour(s) will be needed to pass distance`);
  }
};

car.ShowPassport();
car.CalculateTime(+prompt("Distance"));