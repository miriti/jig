define(['./ComponentContainer'], function(ComponentContainer) {
  var extend = function(a, b) {
    a.prototype = Object.create(b.prototype);
    
    if(b !== ComponentContainer) {
      var componentContainer = Object.create(ComponentContainer.prototype);

      for(var f in componentContainer) {
        a.prototype[f] = componentContainer[f];
      }
    }

    a.prototype.constructor = a;

    return a;
  };
  
  window.extend = window.extend || extend;
  
  return extend;
});
