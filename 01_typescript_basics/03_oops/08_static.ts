// Static Property Definition:
// A static property belongs to the class itself, not to the object. It is
// shared by all objects created from that class.
//
// Static Method Definition:
// A static method also belongs to the class itself, not to the object. It is
// used to access or manage class-level data.
//
// Real-world example:
// In a ride-booking app, active rides count is common for the whole system,
// not separate for each ride object. So we use a static property to store the
// total active rides, and a static method/getter to read that shared value.


// static variables and  methods are store in global memory 


class Rides {
  //static property
  private static _activeRides: number = 0;

  start() {
    Rides._activeRides++;
  }
  stop() {
    Rides._activeRides--;
  }

  // static method
  static get activeRides(): number {
    return Rides._activeRides;
  }
}

let zomatoRide1 = new Rides();
zomatoRide1.start();

let zomatoRide2 = new Rides();
zomatoRide2.start();

console.log(Rides.activeRides);
