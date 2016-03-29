define([
  './extend',
  './Container',
  'pixi'
], function(extend, Container, PIXI) {
  var Input = function(text, font) {
    Container.call(this);
    
    text = text || "";
    font = font || {font: '24px Courier new', fill: 0x000000, align: 'center'};
    
    this.text = new PIXI.Text(text, font);
    
    this.addChild(this.text);
  };
  
  extend(Input, Container);
  
  Object.defineProperties(Input.prototype, {
    value: {
      get: function() {
        return this.text.text;
      },
      set: function(text) {
        this.text.text = text;
      }
    }
  });
  
  return Input;
});
