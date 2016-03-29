define([
  './extend',
  'pixi'
],
function(extend,
         PIXI) {
  var LoadingScreen = function() {
    PIXI.Container.call(this);
  };
  
  extend(LoadingScreen, PIXI.Container);
  
  LoadingScreen.prototype.progress = function(loader) {};
  
  return LoadingScreen;
});
