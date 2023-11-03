let noteArray = []
let soundFiles = ["Audio/A3.mp3","Audio/B3.mp3","Audio/C3.mp3","Audio/D3.mp3","Audio/E3.mp3","Audio/F3.mp3","Audio/G3.mp3","Audio/Ab3.mp3","Audio/Bb3.mp3","Audio/Db3.mp3","Audio/Eb3.mp3","Audio/Gb3.mp3"]

for (let i = 0; i < 13; i++) {
    noteArray[i] = new Audio(soundFiles[i])
}

const cells = document.getElementsByClassName("cell")
const whiteKeys = document.getElementsByClassName("white")
const blackKeys = document.getElementsByClassName("inner")

const keys = Array.from(whiteKeys).concat(Array.from(blackKeys))

let cellColor = "rgb(255, 228, 196)";
let cellPressed = "rgb(211, 190, 164)";

let whitePressed = "rgb(182, 182, 182)";
let white = "rgb(255, 255, 255)";

let blackPressed = "rgb(50, 50, 50)";
let black = "rgb(0, 0, 0)";

let downDetect = [false,false,false,false,false,false,false,false,false,false,false,false]
let notes = [2,3,4,5,6,0,1,9,10,11,7,8]
let cellOrder = [7,8,9,10,11,12,13,1,2,4,5,6]
let keyOrder = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyW","KeyE","KeyT","KeyY","KeyU"]

for (let i = 0; i < 12; i++) {
    buttonListeners(i)
    keyListeners(i)
}

function buttonListeners(index) {
    keys[index].addEventListener("mousedown", () => {
        if (downDetect[index] == false) {
            noteArray[notes[index]].cloneNode().play();
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
        if (e.code == keyOrder[index] && downDetect[index] == false) {
            noteArray[notes[index]].cloneNode().play()
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