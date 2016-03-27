define([
  'jig/Container'
],
function(Container) {
  var GameMain = function() {
    Container.call(this);
  };
  
  extend(GameMain, Container);
  
  return GameMain;
});
