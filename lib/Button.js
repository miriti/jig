define([
  './extend',
  './Container',
  './components/Animated'
],
function(extend,
         Container,
         Animated) {
  var Button = function(upState, overState, downState) {
    Container.call(this);
    
    this.addComponent(Animated);
    
    this.upState = upState;
    this.overState = overState;
    this.downState = downState;
    
    this.interactive = this.buttonMode = true;
    this.addChild(this.upState);
  };
  
  extend(Button, Container);
  
  return Button;
});
