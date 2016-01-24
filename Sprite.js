define([
  'pixi'
],
function(PIXI) {
  var Sprite = function(texture) {
    PIXI.Sprite.call(this, texture);
    
    this.anchor.set(0.5, 0.5);
  };
  
  extend(Sprite, PIXI.Sprite);
  
  return Sprite;
});
