define([
  './Shape'
],
function(Shape) {
  var Triangle = function(fill) {
    this._super([fill]);
  };
  
  extend(Triangle, Shap);
  
  return Triangle;
});
