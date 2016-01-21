define([
  './Animated',
  './Events',
  './Schedule',
  './Updatable'
], function(Animated,
            Events,
            Schedule,
            Updatable) {
  return {
    Animated: Animated,
    Events: Events,
    Schedule: Schedule,
    Updatable: Updatable
  }
});
