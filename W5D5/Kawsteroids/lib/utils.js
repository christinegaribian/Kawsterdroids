const Util = {
  inherits (childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  randomVec (length) {
    const deg = 2 * Math.PI * Math.floor(Math.random()*1000);
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }
};

// Return a randomly oriented vector with the given length.
// Scale the length of a vector by the given amount.

module.exports = Util;
