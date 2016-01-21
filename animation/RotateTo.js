define([
  '../utils',
  './Rotate'
], function(utils, Rotate) {
  var RotateTo = function(to, totalTime, easing) {
    Rotate.call(this, null, to, totalTime, easing);
  };

  utils.extend(RotateTo, Rotate);

  RotateTo.prototype.update = function(subject, delta) {
    if (this.from === null) {
      this.from = subject.rotation;
    }
    
    Rotate.prototype.update.call(this, subject, delta);
  };
  
  return RotateTo;
});
