define([
  './extend',
  'pixi'
],
function(extend,
         PIXI) {
  var LoadingScreen = function() {
    PIXI.Container.call(this);
    
    this.text = new PIXI.Text("Loading...", {fill: "#ffffff", wordWrap: true, align: 'center'});
    this.text.anchor.set(0.5, 0.5);
    this.addChild(this.text);
  };
  
  extend(LoadingScreen, PIXI.Container);
  
  LoadingScreen.prototype.progress = function(loader) {
    this.text.text = "Loading...\n" + Math.floor(loader.progress) + '%';
  };
  
  return LoadingScreen;
});
