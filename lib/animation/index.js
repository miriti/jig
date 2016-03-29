define([
  './Alpha',
  './Color',
  './Move',
  './MoveTo',
  './Rotate',
  './RotateTo',
  './Scale',
  './ScaleTo'
],
function(Alpha,
         Color,
         Move,
         MoveTo,
         Rotate,
         RotateTo,
         Scale,
         ScaleTo) {
  return {
    Alpha: Alpha,
    Color: Color,
    Move: Move,
    MoveTo: MoveTo,
    Rotate: Rotate,
    RotateTo: RotateTo,
    Scale: Scale,
    ScaleTo: ScaleTo
  }
});
