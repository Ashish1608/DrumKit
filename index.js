
// handles button click

var num_of_drum_buttons = document.querySelectorAll(".drum").length ;

for (var i = 0; i < num_of_drum_buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", buttonResponse);
}

function buttonResponse() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

}

// handles keyboarb press

document.addEventListener("keydown", KeyboardResponse);

function KeyboardResponse(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

}

// creating sounds

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;

    default: console.log(key);

  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)

}
