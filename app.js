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

let Adown = false
let Bdown = false
let Cdown = false
let Ddown = false
let Edown = false
let Fdown = false
let Gdown = false

let Abdown = false
let Bbdown = false
let Dbdown = false
let Ebdown = false
let Gbdown = false

window.addEventListener('keydown', function (e) {
    if (e.code == "KeyH" && Adown == false) {
        A.cloneNode().play()
        Adown = true
        cells[12].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyJ" && Bdown == false) {
        B.cloneNode().play()
        Bdown = true
        cells[13].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyA" && Cdown == false) {
        C.cloneNode().play()
        Cdown = true
        cells[7].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyS" && Ddown == false) {
        D.cloneNode().play()
        Ddown = true
        cells[8].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyD" && Edown == false) {
        E.cloneNode().play()
        Edown = true
        cells[9].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyF" && Fdown == false) {
        F.cloneNode().play()
        Fdown = true
        cells[10].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyG" && Gdown == false) {
        G.cloneNode().play()
        Gdown = true
        cells[11].style.backgroundColor = "rgb(211, 190, 164)";
    }

    else if (e.code == "KeyY" && Abdown == false) {
        Ab.cloneNode().play()
        Abdown = true
        cells[5].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyU" && Bbdown == false) {
        Bb.cloneNode().play()
        Bbdown = true
        cells[6].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyW" && Dbdown == false) {
        Db.cloneNode().play()
        Dbdown = true
        cells[1].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyE" && Ebdown == false) {
        Eb.cloneNode().play()
        Ebdown = true
        cells[2].style.backgroundColor = "rgb(211, 190, 164)";
    }
    else if (e.code == "KeyT" && Gbdown == false) {
        Gb.cloneNode().play()
        Gbdown = true
        cells[4].style.backgroundColor = "rgb(211, 190, 164)";
    }
  }, false);

  window.addEventListener('keyup', function (e) {
    if (e.code == "KeyH") {
        Adown = false
        cells[12].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyJ") {
        Bdown = false
        cells[13].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyA") {
        Cdown = false
        cells[7].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyS") {
        Ddown = false
        cells[8].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyD") {
        Edown = false
        cells[9].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyF") {
        Fdown = false
        cells[10].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyG") {
        Gdown = false
        cells[11].style.backgroundColor = "rgb(255, 228, 196)";
    }

    else if (e.code == "KeyY") {
        Abdown = false
        cells[5].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyU") {
        Bbdown = false
        cells[6].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyW") {
        Dbdown = false
        cells[1].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyE") {
        Ebdown = false
        cells[2].style.backgroundColor = "rgb(255, 228, 196)";
    }
    else if (e.code == "KeyT") {
        Gbdown = false
        cells[4].style.backgroundColor = "rgb(255, 228, 196)";
    }
  }, false);