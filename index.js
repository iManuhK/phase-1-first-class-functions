function receivesAFunction(callmeback) {
    "This is me "
    callmeback();
  }

  function returnsANamedFunction () {
    return function nothingReally() { "This is me"};
  }
function returnsAnAnonymousFunction () {
    return function() { "This is me"};
}