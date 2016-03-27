define([], function() {
  var Easing = {};
  
  Easing.liniar = function(from, to, t) {
    return from + (to - from) * t;
  };
  
  Easing.sine = function(from, to, t) {
    return from + (to - from) * Math.sin((Math.PI / 2) * t);
  };
  
  Easing.default = Easing.sine;
  
  return Easing;
});
