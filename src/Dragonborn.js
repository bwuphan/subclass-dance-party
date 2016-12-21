var Dragonborn = function(top, left, timeBetweenSteps) {
  //create an object and bind to it to this
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dragonborn');
  this.$node.addClass("right");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
  //return this
};

Dragonborn.prototype = Object.create(makeDancer.prototype);
Dragonborn.prototype.constructor = Dragonborn;
Dragonborn.prototype.oldStep = makeDancer.prototype.step;
Dragonborn.prototype.step = function(){
  this.oldStep();
 if($(this.$node).hasClass("right")){
    $(this.$node).removeClass("right");
    $(this.$node).addClass("left");
 }else if($(this.$node).hasClass("left")){
    $(this.$node).removeClass("left");
    $(this.$node).addClass("right");
  }
}