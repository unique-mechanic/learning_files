for ( var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){ 
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        playAudio(buttonInnerHTML);
        
        }
    )
}
    
function playAudio(key){
    console.log(key);
    switch (key){
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;
        case "a":
            var kickbass = new Audio('./sounds/kick-bass.mp3');
            kickbass.play();
        break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break;
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;
        case "z":
            var toyWhistle = new Audio('./sounds/toy-whistle.wav');
            toyWhistle.play();
        break;
        default://like an else statment in if-else block
}}

document.addEventListener("keydown" , function(event){
    var keyPressed = event.key;
    buttonAnimation(keyPressed);
    playAudio(keyPressed);
    })

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);
}

// for ( var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){ 
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         var audio = new Audio('./sounds/tom-2.mp3');
//         audio.play();
//         //alert("I got clicked");
//         }
//     )
// }

// document.querySelector(".w").addEventListener("click", function(){
//     var audio = new Audio('./sounds/crash.mp3');
//     audio.play();
//     }
// )

// document.querySelector(".a").addEventListener("click", function(){
//     var audio = new Audio('./sounds/kick-bass.mp3');
//     audio.play();
//     }
// )

// document.querySelector(".s").addEventListener("click", function(){
//     var audio = new Audio('./sounds/snare.mp3');
//     audio.play();
//     }
// )

// document.querySelector(".d").addEventListener("click", function(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
//     }
// )

// document.querySelector(".j").addEventListener("click", function(){
//     var audio = new Audio('./sounds/tom-2.mp3');
//     audio.play();
//     }
// )

// document.querySelector(".k").addEventListener("click", function(){
//     var audio = new Audio('./sounds/tom-3.mp3');
//     audio.play();
//     }
// )

// document.querySelector(".l").addEventListener("click", function(){
//     var audio = new Audio('./sounds/tom-4.mp3');
//     audio.play();
//     }
// )


//calculator code for higher order functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1/num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

var housekeeper1 = {
    yearsOfExperience: 12,
    floor: 5,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

function houseKeeper(yearsOfExperience, floor, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.floor = floor;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}
