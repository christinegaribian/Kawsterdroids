var Util = require("./utils");
var MovingObject = require("./moving_object");

Util.inherits(Kawsterdroid, MovingObject);

function Kawsterdroid(positionHash){
  this.COLOR = "blue";
  this.RADIUS = 5;
  MovingObject.call(this, {pos: positionHash["pos"], color: this.COLOR,
  radius: this.RADIUS, vel: Util.randomVec(5)});
}

module.exports = Kawsterdroid;
