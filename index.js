/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
alert("I got clicked MOFOS");
}
*/

/* ANONYNOUS FUNCTION IS CALLED   
document.querySelector("button").addEventListener("click", function () {
alert("I got clicked MOFOS");

}); 
*/



// ADDING EVENT LISTENER for detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   //this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    }); 

}


// ADDING EVENT LISTENER for detecting keyboard press  (keydown now, before keypress) this is a HIGH ORDER FUNCTION
 // leccion 145 esta el transcript y explicacion
 //When we talk about Higher Order Functions, we're referring to the function that's able to take functions
//as inputs. So in this case the addEventListener is a Higher-order function, as it takes the respondToKey function as an input. Now what about the other side? What about the function that gets passed in as an input? Well this is actually called a Callback function because it allows us to wait for something to finish
//happening, for example waiting for a click event, and then the callback function gets called back and executed. So previously, when our button detects a click it calls the callback function, and in this case, when the document or the entire web page detects a keypress then the document will call this function respondToKey. Now when that happens, we can get it to send us some information that it'll only know once the event happens, namely say which button was clicked, or which keyboard key was pressed.

document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

 });

function makeSound(key) {

    switch (key) {
        case "w": 
         var crash = new Audio("/sounds/crash.mp3")
            crash.play();
    
        case "a": 
         var kick = new Audio("/sounds/kick-bass.mp3")
            kick.play();
            break;
    
    
        case "s": 
         var snare = new Audio("/sounds/snare.mp3")
            snare.play();
            break;
    
    
        case "d": 
         var tom1 = new Audio("/sounds/tom-1.mp3")
            tom1.play();
            break;
    
    
        case "j": 
         var tom2 = new Audio("/sounds/tom-2.mp3")
            tom2.play();
            break;
    
    
        case "k": 
         var tom3= new Audio("/sounds/tom-3.mp3")
            tom3.play();
            break;
    
    
        case "l": 
         var tom4 = new Audio("/sounds/tom-4.mp3")
            tom4.play();
            break;
    
    default: console.log(buttonInnerHTML);
    
    }; 
}

// adding a class to an active pressed button so It can work with JS animations
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey); 

activeButton.classList.add("pressed");

// release the PRESSED button after 100ms
setTimeout(function() {
    activeButton.classList.remove("pressed");

}, 100);

}

    
    
 
// funcion para reproducir los audios por medio del "keydown"

 
