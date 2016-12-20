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
Dragon.prototype.oldStep = makeDancer.prototype.step;

Dragon.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};