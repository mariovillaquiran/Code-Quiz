var currentquestionindex = 0; 
var time = questions.length * 15; 
var timer ;

var questionselement = document.getElementById("questions")
var timerelement = document.getElementById ("time")
var choiceselement = document.getElementById ("choices")
var startbutton = document.getElementById("start")
var submitbutton = document.getElementById("submit")

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
    currentquestion.forEach(element => {
        
    });
}
function check () {

}

function end () {
        //stop the timer
        clearInterval(timer);

            //hide the questions
    document.querySelector("#questionselement").setAttribute("class","hide");

    //show the end screen
    document.querySelector("#end-screen").removeAttribute("class");
}
startbutton.onclick = start

