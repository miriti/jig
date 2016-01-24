define([
  './extend',
  './Container'
],
function(extend,
         Container) {
  var Button = function(upState, overState, downState) {
    Container.call(this);
    
    this.upState = upState;
    this.overState = overState;
    this.downState = downState;
    
    this.interactive = true;
    this.addChild(this.upState);
  };
  
  extend(Button, Container);
  
  return Button;
});
