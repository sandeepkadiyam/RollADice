var playerImgs = document.querySelectorAll('.dice img');
var heading = document.querySelector('h1');
document.addEventListener("keypress", function() {
  var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  var srcImg1 = "images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
  var srcImg2 = "images/dice" + randomNumber2 + ".png";

  playerImgs[0].setAttribute("src", srcImg1);
  playerImgs[1].setAttribute("src", srcImg2);


  if  (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player2 Wins ! 🎯";
  } else if (randomNumber2 < randomNumber1) {
    heading.innerHTML = "🎯 Player1 Wins !";
  } else {
    heading.innerHTML = "Draw";
  }
});

// <i class='fas fa-beer'></i>
