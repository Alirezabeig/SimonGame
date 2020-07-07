var buttonColors =["red", "blue", "green", "yellow"];
var gamePattern  = [];

var userClickedPattern =[];
var level = 0;

var started = false;

function newSequence(){

  level++ ;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);


}

$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor)

});

function playSound(name) {
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(".btn").keydown(function(){
  nextSequence()
}

$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

    }

}
