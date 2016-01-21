define([
  'Updatable'
].map(function(name) {
  return './components/' + name;
}),
function(Updatable) {
  return {
    Updatable: Updatable
  }
});
