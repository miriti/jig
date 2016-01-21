define([
  '../utils',
  '../Animation'
],
function(utils,
         Animation) {
  var Alpha = function(from, to, totalTime, easing) {
    Animation.call(this, totalTime, easing);
    
    this.from = from;
    this.to = to;
  };
  
  utils.extend(Alpha, Animation);
  
  Alpha.prototype.update = function(subject, delta) {
    if(!this.isFinished(delta)) {
      subject.alpha = this.easing(this.from, this.to, this.t);
    };
  };
  
  return Alpha;
});
