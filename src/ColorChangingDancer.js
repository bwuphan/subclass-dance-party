var ColorChangingDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

}

ColorChangingDancer.prototype = Object.create(makeBlinkyDancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;
ColorChangingDancer.prototype.oldStep = makeDancer.prototype.step;

ColorChangingDancer.prototype.step = function(){
  this.oldStep();
  if(this.$node.hasClass('red')){
    this.$node.removeClass('red');
  } else if(this.$node.hasClass('orange')){
    this.$node.removeClass('orange');
  } else if(this.$node.hasClass('yellow')){
    this.$node.removeClass('yellow');
  } else if(this.$node.hasClass('green')){
    this.$node.removeClass('green');
  } else if(this.$node.hasClass('blue')){
    this.$node.removeClass('blue');
  } else if(this.$node.hasClass('indigo')){
    this.$node.removeClass('indigo');
  } else if(this.$node.hasClass('violet')){
    this.$node.removeClass('violet');
  } else if(this.$node.hasClass('white')){
    this.$node.removeClass('white');
  } else if(this.$node.hasClass('pink')){
    this.$node.removeClass('pink');
  } else if(this.$node.hasClass('black')){
    this.$node.removeClass('black');
  }
  var randomNum = Math.random() * 10;
  if(randomNum <= 1){
    this.$node.addClass('red');
  } else if(randomNum > 1 && randomNum <= 2){
    this.$node.addClass('orange');
  }  else if(randomNum > 2 && randomNum <= 3){
    this.$node.addClass('yellow');
  }  else if(randomNum > 3 && randomNum <= 4){
    this.$node.addClass('green');
  }  else if(randomNum > 4 && randomNum <= 5){
    this.$node.addClass('blue');
  }  else if(randomNum > 5 && randomNum <= 6){
    this.$node.addClass('indigo');
  }  else if(randomNum > 6 && randomNum <= 7){
    this.$node.addClass('violet');
  }  else if(randomNum > 7 && randomNum <= 8){
    this.$node.addClass('white');
  }  else if(randomNum > 8 && randomNum <= 9){
    this.$node.addClass('pink');
  }  else if(randomNum > 9 && randomNum <= 10){
       this.$node.addClass('black');
  }
  this.$node.toggle();
}
