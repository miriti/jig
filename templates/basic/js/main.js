require.config({
  paths: {
    pixi: 'pixi.js/bin/pixi.min'
  }
})

define([
  'jig/Game',
  './GameMain',
  './data'
],
function(Game,
         GameMain,
         data) {
  new Game()
    .config({
      width: 1920,
      height: 1080,
      responsive: true,
    })
    .data(data)
    .run()
    .setState(new GameMain());
});
