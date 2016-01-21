define([
  './utils',
  'pixi'
],
function(utils,
         PIXI) {
  var LoadingScreen = function() {
    PIXI.Container.call(this);
    
    this.text = new PIXI.Text("Loading", {fill: "#ffffff"});
    this.addChild(this.text);
  };
  
  utils.extend(LoadingScreen, PIXI.Container);
  
  LoadingScreen.prototype.progress = function(loader) {
    this.text.text = "Loading " + loader.progress + '%';
  };
  
  return LoadingScreen;
});
