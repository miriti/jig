define([
  './utils',
  './components',
  './Game'
], function(utils,
            components,
            Game) {
  return {
    Game: Game,
    utils: utils,
    components: components
  }
});
