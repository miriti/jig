require.config({
  paths: {
    pixi: 'pixi.js/bin/pixi.min'
  }
})

define([
  'framework/Game',
  './GameMain'
],
function(Game,
         GameMain) {
  new Game(1920, 1080)
    .config({responsive: true})
    .setState(new GameMain())
    .run();
});
