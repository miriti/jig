define([], function() {
  return {
    play: function(resource) {
      var audio = new Audio(game.resources[resource].url);
      audio.play();
    }
  }
})
