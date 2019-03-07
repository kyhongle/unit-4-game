var targetNumber = Math.floor(Math.random() * 21) + 30;
var win = 0;
var lose = 0;
var guessLeft = 6;
var counter = 0;

$("#score").text(counter);
$("#target-number").text(targetNumber);
$("#guess-number").text(guessLeft);
$("#win").text("Win: " + win);
$("#lose").text("Lose: " + lose);

var numbOptions = [];
var numberGenerator = function(arr) {
  if (arr.length >= 4) return;
  let newNumber = Math.floor(Math.random() * 15 + 1);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator(arr);
};
numberGenerator(numbOptions);
console.log(numbOptions);

var imageLinks = [
  "./images/crystal-04.png",
  "./images/crystal-03.png",
  "./images/crystal-02.png",
  "./images/crystal_Artboard 5.png"
];
for (var i = 0; i < numbOptions.length; i++) {
  var image = $("<img>");
  image.addClass("crystal-image");
  image.attr("src", imageLinks[i]);
  image.attr("data-crystalvalue", numbOptions[i]);

  $(".images").append(image);
}

function reset() {
  counter = 0;
  $("#score").text(counter);
  guessLeft = 6;
  $("#guess-number").text(guessLeft);
  targetNumber = Math.floor(Math.random() * 21) + 30;
  $("#target-number").text(targetNumber);
  numberGenerator(numbOptions);
}

// function resetGuess() {
//   guessLeft = 6;
//   $("#guess-number").text(guessLeft);
// }

$(".crystal-image").on("click", function() {
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  console.log("clicked", counter);
  $("#score").text(counter);

  guessLeft--;
  $("#guess-number").text(guessLeft);

  if (counter > targetNumber && guessLeft >= 0) {
    lose++;
    $("#lose").text("Lose: " + lose);
    reset();
  } else if (counter < targetNumber && guessLeft === 0) {
    lose++;
    $("#lose").text("Lose: " + lose);
    reset();
  } else if (counter === targetNumber && guessLeft >= 0) {
    win++;
    $("#win").text("Win: " + win);
    reset();
  }
});
