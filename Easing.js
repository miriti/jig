define([], function() {
  var Easing = {};
  
  Easing.liniar = function(from, to, t) {
    return from + (to - from) * t;
  };
  
  return Easing;
});
