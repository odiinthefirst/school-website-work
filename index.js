var questionNumber = 1;
var score = 0;

function showQuestion(question) {
$('p').hide();
// does the paragraph have a length greater than zero
// i.e. does it exist?!
if ($("p:nth-of-type("+ question + ")").length > 0){
// show it if it does
$("p:nth-of-type("+ question + ")").show();
} else {
// show the paragraph with an id of final
$("#final").show();
}
}

$('span').click(function() {
if ($(this).hasClass("correct")) {
score++;
}
$('.score').html(score);
questionNumber++;
showQuestion(questionNumber); // load the next question
});

showQuestion(questionNumber);