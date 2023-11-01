let A = new Audio("Audio/A3.mp3")
let B = new Audio("Audio/B3.mp3")
let C = new Audio("Audio/C3.mp3")
let D = new Audio("Audio/D3.mp3")
let E = new Audio("Audio/E3.mp3")
let F = new Audio("Audio/F3.mp3")
let G = new Audio("Audio/G3.mp3")

let Ab = new Audio("Audio/Ab3.mp3")
let Bb = new Audio("Audio/Bb3.mp3")
let Db = new Audio("Audio/Db3.mp3")
let Eb = new Audio("Audio/Eb3.mp3")
let Gb = new Audio("Audio/Gb3.mp3")

const cells = document.getElementsByClassName("cell")
const whiteKeys = document.getElementsByClassName("white")
const blackKeys = document.getElementsByClassName("inner")

const keys = []

for (let i = 0; i < (whiteKeys.length + blackKeys.length); i++) {
    if (i < 7) {
        keys[i] = whiteKeys[i]
    }
    else {
        keys[i] = blackKeys[i % 7]
    }
}

let cellColor = "rgb(255, 228, 196)";
let cellPressed = "rgb(211, 190, 164)";

let whitePressed = "rgb(182, 182, 182)";
let white = "rgb(255, 255, 255)";

let blackPressed = "rgb(50, 50, 50)";
let black = "rgb(0, 0, 0)";

let downDetect = [false,false,false,false,false,false,false,false,false,false,false,false]
let notes = [C,D,E,F,G,A,B,Db,Eb,Gb,Ab,Bb]
let cellOrder = [7,8,9,10,11,12,13,1,2,4,5,6]
let keyOrder = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyW","KeyE","KeyT","KeyY","KeyU"]

for (let i = 0; i < 12; i++) {
    addListeners(i)
    keyListeners(i)
}

function addListeners(index) {
    keys[index].addEventListener("mousedown", () => {
        if (downDetect[index] == false) {
            notes[index].cloneNode().play();
            downDetect[index] = true;
            cells[cellOrder[index]].style.backgroundColor = cellPressed;
            if (index < 7) {
                keys[index].style.backgroundColor = whitePressed;
            }
            else {
                keys[index].style.backgroundColor = blackPressed;
            }
        }
    })

    keys[index].addEventListener("mouseup", () =>  {
        downDetect[index] = false
        cells[cellOrder[index]].style.backgroundColor = cellColor;
        if (index < 7) {
            keys[index].style.backgroundColor = white;
        }
        else {
            keys[index].style.backgroundColor = black;
        }
    })
}

function keyListeners(index) {
    window.addEventListener('keydown', function (e) {
        if (e.code == keyOrder[index]) {
            notes[index].cloneNode().play()
            downDetect[index] = true
            cells[cellOrder[index]].style.backgroundColor = cellPressed;
            if (index < 7) {
                keys[index].style.backgroundColor = whitePressed;
            }
            else {
                keys[index].style.backgroundColor = blackPressed;
            }
        }
      }, false);

      window.addEventListener('keyup', function (e) {
        if (e.code == keyOrder[index]) {
            downDetect[index] = false
            cells[cellOrder[index]].style.backgroundColor = cellColor;
            if (index < 7) {
                keys[index].style.backgroundColor = white;
            }
            else {
                keys[index].style.backgroundColor = black;
            }
        }
      }, false);
}