define([
  'pixi',
  './components/Updatable'
], function(PIXI,
            Updatable) {
  var Container = function(children) {
    PIXI.Container.call(this);

    this.addComponent(Updatable);

    children = children || [];

    for(var i in children) {
      this.addChild(children[i]);
    }
    
    this.keyboard = true;
  };

  extend(Container, PIXI.Container);
  
  Container.prototype.addChildren = function(children) {
    children.forEach(function(child) {
      this.addChild(child);
    }, this);
  }
  
  Container.prototype.keyDown = function(keyCode) {
    this.children.forEach(function(child) {
      if(child.keyDown)
        child.keyDown(keyCode);
    });
  };
  Container.prototype.keyUp = function(keyCode) {
    this.children.forEach(function(child) {
      if(child.keyUp)
        child.keyUp(keyCode);
    });
  };
  Container.prototype.keyPress = function(keyCode) {
    this.children.forEach(function(child) {
      if(child.keyPress)
        child.keyPress(keyCode);
    });
  };

  return Container;
});
