
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log(this.step);

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

  makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // setTimeout(function(){
    //   this.step();
    // }, timeBetweenSteps);
    setTimeout(this.step.bind(this), this.time)
  }


  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };













/*
///////////////////////////////
// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {


//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');

//   this.step();
//   this.setPosition(top, left);

// };

//   makeDancer.prototype.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//
//     // setTimeout(dancer.step, timeBetweenSteps);
//     //setTimeout(function(){}, timeBetweenSteps)

//     return function(){
//       setTimeout(function(){this.step()}, timeBetweenSteps)
//     }.bind(this)
//   };




//   makeDancer.prototype.setPosition = function(top, left) {

//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body

*/