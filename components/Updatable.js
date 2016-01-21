define([], function() {
  var Updatable = function() {
  };

  Updatable.prototype.update = function(delta) {
    if(this.children) {
      for(var i in this.children) {
        if(this.children[i]['update']) {
          this.children[i].update(delta);
        }
      }
    }
  };

  return Updatable;
});
