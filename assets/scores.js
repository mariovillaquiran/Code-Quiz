function highscore () {
    var showhighscore = JSON.parse(window.localStorage.getItem("highscores"))
showhighscore.sort(function(a,b){
    return b.score - a.score
})
showhighscore.forEach(function(score) {
    var listtag = document.createElement("li")
    listtag.textContent = score.initials + "-" + score.score
    var orderelement = document.getElementById("highscores")
    orderelement.appendChild(listtag)
});
}
highscore ()