define([], function() {
  var Animated = function() {
    this._animated_anims = [];
    this._animated_index = 0;
    this._animated_finished = false;
  };
  
  Animated.prototype.resetAnimation = function() {
    this._animated_anims = [];
  };

  Animated.prototype.addAnimation = function(anim, after) {
    if (anim.constructor !== Array) {
      anim = [anim];
    }
    
    this._animated_anims.push({
      list: anim,
      after: after
    });
    
    this._animated_finished = false;

    return this;
  };

  Animated.prototype.update = function(delta) {
    if (this._animated_index < this._animated_anims.length) {
      var current = this._animated_anims[this._animated_index].list;

      var activeAnims = current.filter(function(anim) {
        return !anim.finished;
      });

      if (activeAnims.length > 0) {
        for (var i in activeAnims) {
          activeAnims[i].update(this, delta);
        }
      } else {
        if(this._animated_anims[this._animated_index].after) {
          this._animated_anims[this._animated_index].after.call(this);
        }
        this._animated_index++;
      }
    } else {
      if(!this._animated_finished) {
        this._animated_finished = true;
      }
    }
  };

  return Animated;
});
