$(document).ready(function() {
  window.dancers = [];


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    //var colorChangingDancer = new colorChangingDancerMakerFunction
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(document).on('mouseover', ".dragon", function(event){
    var randomNum = Math.random();
    if(randomNum < 0.25){
      $(this).animate({left: "+=100px"}, "slow");
    }
    if(randomNum >= 0.25 && randomNum < 0.5){
      $(this).animate({left: "-=100px"}, "slow");
    }
    if(randomNum >= 0.5 && randomNum < 0.75){
      $(this).animate({top: "+=100px"}, "slow");
    }
    if(randomNum >= 0.75 && randomNum <= 1){
      $(this).animate({top: "-=100px"}, "slow");
    }
  });

  $(document).on("click", ".lineup", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      var bool = $(window.dancers[i].$node).hasClass("dragon")
      if(bool){
        $(window.dancers[i].$node).animate({left: "20px"}, "slow");
      } else if($(window.dancers[i].$node).hasClass("dragonborn")){
        $(window.dancers[i].$node).animate({left: "1150px"}, "slow");
      }else{
        $(window.dancers[i].$node).animate({top: "80px"}, "slow");
      }
    }
  });

    $(document).on("click", ".dragon", function(event){
      var $this = $(this);
      var clicked = $this[0];
      //console.log(window.dancers.indexOf(clicked));
      var $positionClicked = $this.position();
      var xClicked = $positionClicked.left;
      var yClicked = $positionClicked.top;
      var dancersArr = window.dancers;
      var closestDancer;
      var closestDistance = 1000000;
      for(var i = 0; i < dancersArr.length; i++){
        if(clicked !== dancersArr[i].$node['0']){
          var $that = dancersArr[i].$node;
          var $positionThat = $that.position();
          var xThat = $positionThat.left;
          var yThat = $positionThat.top;
          distance = Math.sqrt(Math.pow(xThat - xClicked, 2) + Math.pow(yThat - yClicked, 2));
          if(distance < closestDistance && $that.hasClass('dragonborn')){
            var indexDragonborn = dancersArr[i];
            closestDancer = $that;
            closestDistance = distance;
          }
        }
      }
      var index = dancersArr.indexOf(indexDragonborn);
      var xNewCoordinates = closestDancer.position().left - 150;
      var yNewCoordinates = closestDancer.position().top - 50;
      $this.animate({top: yNewCoordinates}, "slow");
      $this.animate({left: xNewCoordinates}, "slow");
      setTimeout(function(){
        closestDancer.addClass('fire');
        setTimeout(function(){
          closestDancer.remove();
          window.dancers.splice(index,1);
        },700)
      }, 2000);
      // setTimeout(function(){
      //   closestDancer.remove();
      //   window.dancers.splice(index,1);
      // }, 3700)
  });


    $(document).on("click", ".fightButton", function(event){
      var dragon;
      var dragonborn;
      var index;
      var $shout = $("<span class ='shout'></span>");
      for(var i = 0; i < window.dancers.length; i++){
        if(dragon === undefined && window.dancers[i].$node.hasClass("dragon")){
          dragon = window.dancers[i].$node;
          index = i;
        }
        if(dragonborn === undefined && window.dancers[i].$node.hasClass("dragonborn")){
          dragonborn = window.dancers[i].$node;
        }
      }
      $(dragon).animate({top: "300px"}, "slow");
      $(dragon).animate({left: "500px"}, "slow");
      $(dragonborn).animate({top: "350px"}, "slow");
      $(dragonborn).animate({left: "700px"}, "slow");
      setTimeout(function(){
        dragon.remove();
        dragon = undefined;
        dragonborn = undefined;
        window.dancers.splice(index,1);
      }, 4000)
  });

});

