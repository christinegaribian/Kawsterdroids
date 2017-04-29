/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(1);

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

document.addEventListener('DOMContentLoaded',function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  new GameView(ctx).start();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(2);

function GameView (context) {
  this.game = new Game();
  this.ctx = context;
}

GameView.prototype.start = function(){
  setInterval(function(){
    this.game.moveObjects();
    this.game.draw(this.ctx);
  },20);
};

module.exports = GameView;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Kawsterdroid = __webpack_require__(3);
function Game(){
  this.DIM_X = 1000;
  this.DIM_Y = 1000;
  this.NUM_KAWSTERDROIDS = 20;
  this.kawsterdroids = [];
  this.addKawsterdroids();

}
Game.prototype.draw = function(context){
  context.clearRect(0,0,this.DIM_X,this.DIM_Y);
  this.kawsterdroids.forEach(function(kawsterdroid){
    kawsterdroid.draw(context);
  });
};
Game.prototype.addKawsterdroids = function(){
  for(let i = 0; i < this.NUM_KAWSTERDROIDS; i++){
    this.kawsterdroids[i] = new Kawsterdroid(this.randomPosition());
  }
};

Game.prototype.randomPosition = function(){
  return [Math.floor(Math.random()*this.DIM_X), Math.floor(Math.random()*this.DIM_Y)];
};

Game.prototype.moveObjects = function(){
  this.kawsterdroids.forEach(function(kawsterdroid){
    kawsterdroid.move();
  });
  this.draw();
};
module.exports = Game;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(5);
var MovingObject = __webpack_require__(4);

Util.inherits(Kawsterdroid, MovingObject);

function Kawsterdroid(positionHash){
  this.COLOR = "blue";
  this.RADIUS = 5;
  MovingObject.call(this, {pos: positionHash["pos"], color: this.COLOR,
  radius: this.RADIUS, vel: Util.randomVec(5)});
}

module.exports = Kawsterdroid;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function MovingObject(options){
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function(){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = MovingObject;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map