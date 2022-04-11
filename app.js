class Vehicle {
    constructor(vehicleType, make, model, year)
        vehicleType = this.vehicleType;
        numberOfWheels {this.numberOfWheels = 0};
        this.numberOfPassengers = 0;
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuel = 0;
        this.started = false;
        this.speed = 0;
        this.milleage = milleage;
}
  
start() {
    if (this.fuel > 0 {
      return this.started = true;
      console.log ("Engine started!");
    } else {
        return this.started = false;
        console.log ("Engine did not start. Needs fuel!");
    }
  }
  
  accelerate(){
    if (this.started) {
      if(this.fuel > 0) {
        console.log (this.speed += 1);
        this.fuel = this.fuel - 1;
    } else {
        console.log ("Vehicle is empty, needs fuel.");
        this.stop();
      }
    } else {
        alert ("Engine not started.")
    }
  }
  
  decelerate(){
    if (this.started) {
      if (this.fuel > 0) {
        if (this.speed > 0) {
          console.log (this.speed -= 1);
          this.fuel = this.fuel -1;
        } else {
            console.log ("Vehicle stopped. Out of fuel.");
            this.stop();
              }
          } else {
              alert("You need to start the engine first.");
          }
        }
    }
  }
    stop() {
        this.started = false;
    }
    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }
  