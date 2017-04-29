Function.prototype.inherits = function(parent){
    // const Surrogate = function(){};
    // Surrogate.prototype = parent.prototype;
    // this.prototype = new Surrogate();
    // this.prototype.constructor = this;

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

// Ship.prototype.caw = function() {
//   console.log("CAAAAAW");
// };
MovingObject.prototype.caw = function() {
  console.log("CAAAAAW");
};

const ship1 = new Ship();
ship1.caw();
const asteroid1 = new Asteroid();
asteroid1.caw();

Asteroid.prototype.flyUnfeathered = function(){
  console.log("wooosh");
};

asteroid1.flyUnfeathered();
ship1.flyUnfeathered();
