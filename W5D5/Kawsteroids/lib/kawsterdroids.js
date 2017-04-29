const GameView = require('./game_view.js');

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

document.addEventListener('DOMContentLoaded',function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  new GameView(ctx).start();
});
