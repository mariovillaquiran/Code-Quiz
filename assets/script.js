var currentquestionindex = 0; 
var time = questions.length * 15; 
var timer ;

var questionselement = document.getElementById("questions")
var timerelement = document.getElementById ("time")
var choiceselement = document.getElementById ("choices")
var startbutton = document.getElementById("start")
var submitbutton = document.getElementById("submit")
var feedbackelement = document.getElementById("feedback")
var initialselement = document.getElementById ("initials")

function start (){
var startscreenelement = document.getElementById("start-screen")
startscreenelement.setAttribute("class","hide")
questionselement.removeAttribute ("class")
timer = setInterval(clock,1000)
timerelement.textContent = time
displayquestion()
}
function displayquestion () {
    var currentquestion = questions[currentquestionindex]
    var titleelement = document.getElementById("question-title")
    titleelement.textContent = currentquestion.title
    choiceselement.innerHTML = ""
    currentquestion.choices.forEach(function(choice, i) {
     var choicething = document.createElement("button")   
     choicething.setAttribute("class","choice")
     choicething.setAttribute("value", choice)
     choicething.textContent = i + 1 + ". " + choice
     choicething.onclick = check
     choiceselement.appendChild(choicething)
    });
}
function check () {
if (this.value !== questions[currentquestionindex].answer) {
time -=15
if (time <=0) {
    time = 0
}
timerelement.textContent = time
feedbackelement.textContent = "Bad"
} else {
    //add feedback element here with text content
feedbackelement.textContent = "Great"
}
feedbackelement.setAttribute("class", "feedback")
setTimeout(function(){
    feedbackelement.setAttribute("class","feedback hide")
},500)
currentquestionindex++ 
if (currentquestionindex == questions.length) {
  end ()  
} else {
    displayquestion()
}
}

function end () {
        //stop the timer
        clearInterval(timer);
    //show the end screen
   var endscreenelement = document.getElementById("end-screen")
    endscreenelement.removeAttribute("class");
    var finalscoreelement = document.getElementById("final-score")
    finalscoreelement.textContent = time

            //hide the questions
questionselement.setAttribute("class","hide");

}
function clock (){
 time--
 timerelement.textContent = time
 if (time <=0) {
     end()
 }
}
function savehighscore (){
    var initials = initialselement.value.trim()
    if (initials !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []  
    var newscore = {
        score: time,
        initials:initials
    }
     highscores.push(newscore)
     window.localStorage.setItem("highscores", JSON.stringify(highscores))
    window.location.href = "newscore.html"
    }
}

startbutton.onclick = start
submitbutton.onclick = savehighscore
