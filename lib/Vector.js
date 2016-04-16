define([
  'pixi'
],
function(PIXI) {
  var Vector = function(x, y) {
    this._super([x, y]);
  };
  
  extend(Vector, PIXI.Point);
  
  /**
   * Returns the length of the vector
   */
  Vector.prototype.length = function() {
    return Math.sqrt(this.length2());
  };
  
  /**
   * Calculates length without taking a square root for faster distance calculations
   */
  Vector.prototype.length2 = function() {
    return this.x * this.x + this.y * this.y;
  };
  
  /**
   * Returns atan2 of the vector
   */
  Vector.prototype.atan2 = function() {
    return Math.atan2(this.y, this.x);
  };
  
  return Vector
});
