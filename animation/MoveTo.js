define([
  '../utils',
  './Move'
], function(utils, Move) {
  var MoveTo = function(x, y, totalTime, easing) {
    Move.call(this, undefined, [x, y], totalTime, easing);
  };

  utils.extend(MoveTo, Move);

  MoveTo.prototype.update = function(subject, delta) {
    if (this.from === null) {
      this.from = new PIXI.Point(subject.x, subject.y);
    }

    Move.prototype.update.call(this, subject, delta);
  };

  return MoveTo;
});
