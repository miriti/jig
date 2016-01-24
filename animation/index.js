define([
  './Alpha',
  './Color',
  './Move',
  './MoveTo',
  './Rotate',
  './RotateTo',
  './Scale'
],
function(Alpha,
         Color,
         Move,
         MoveTo,
         Rotate,
         RotateTo,
         Scale) {
  return {
    Alpha: Alpha,
    Color: Color,
    Move: Move,
    MoveTo: MoveTo,
    Rotate: Rotate,
    RotateTo: RotateTo,
    Scale: Scale
  }
});
