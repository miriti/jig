require.config({
  paths: {
    pixi: 'pixi.js/bin/pixi.min'
  }
});

require([
  './extend',
  'main'
],
function(extend, main) {
  window['extend'] = extend;
  window['game'] = main;
});
