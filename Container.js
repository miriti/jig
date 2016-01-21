define([
  'pixi',
  './utils',
  './components/Updatable'
], function(PIXI,
            utils,
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

  utils.extend(Container, PIXI.Container);
  
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
