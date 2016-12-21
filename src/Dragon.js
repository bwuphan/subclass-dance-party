var Dragon = function(top, left, timeBetweenSteps) {
  //create an object and bind to it to this
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dragon');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
  //return this
};

Dragon.prototype = Object.create(makeDancer.prototype);
Dragon.prototype.constructor = Dragon;


