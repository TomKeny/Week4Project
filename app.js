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
        whiteKeys[5].style.backgroundColor = "rgb(182, 182, 182)";
    }
    else if (e.code == "KeyJ" && Bdown == false) {
        B.cloneNode().play()
        Bdown = true
        cells[13].style.backgroundColor = "rgb(211, 190, 164)";
        whiteKeys[6].style.backgroundColor = "rgb(182, 182, 182)";
    }
    else if (e.code == "KeyA" && Cdown == false) {
        C.cloneNode().play()
        Cdown = true
        cells[7].style.backgroundColor = "rgb(211, 190, 164)";
        whiteKeys[0].style.backgroundColor = "rgb(182, 182, 182)";
    }
    else if (e.code == "KeyS" && Ddown == false) {
        D.cloneNode().play()
        Ddown = true
        cells[8].style.backgroundColor = "rgb(211, 190, 164)";
        whiteKeys[1].style.backgroundColor = "rgb(182, 182, 182)";
    }
    else if (e.code == "KeyD" && Edown == false) {
        E.cloneNode().play()
        Edown = true
        cells[9].style.backgroundColor = "rgb(211, 190, 164)";
        whiteKeys[2].style.backgroundColor = "rgb(182, 182, 182)";
    }
    else if (e.code == "KeyF" && Fdown == false) {
        F.cloneNode().play()
        Fdown = true
        cells[10].style.backgroundColor = "rgb(211, 190, 164)";
        whiteKeys[3].style.backgroundColor = "rgb(182, 182, 182)";
    }
    else if (e.code == "KeyG" && Gdown == false) {
        G.cloneNode().play()
        Gdown = true
        cells[11].style.backgroundColor = "rgb(211, 190, 164)";
        whiteKeys[4].style.backgroundColor = "rgb(182, 182, 182)";
    }

    else if (e.code == "KeyY" && Abdown == false) {
        Ab.cloneNode().play()
        Abdown = true
        cells[5].style.backgroundColor = "rgb(211, 190, 164)";
        blackKeys[3].style.backgroundColor = "rgb(50, 50, 50)";
    }
    else if (e.code == "KeyU" && Bbdown == false) {
        Bb.cloneNode().play()
        Bbdown = true
        cells[6].style.backgroundColor = "rgb(211, 190, 164)";
        blackKeys[4].style.backgroundColor = "rgb(50, 50, 50)";
    }
    else if (e.code == "KeyW" && Dbdown == false) {
        Db.cloneNode().play()
        Dbdown = true
        cells[1].style.backgroundColor = "rgb(211, 190, 164)";
        blackKeys[0].style.backgroundColor = "rgb(50, 50, 50)";
    }
    else if (e.code == "KeyE" && Ebdown == false) {
        Eb.cloneNode().play()
        Ebdown = true
        cells[2].style.backgroundColor = "rgb(211, 190, 164)";
        blackKeys[1].style.backgroundColor = "rgb(50, 50, 50)";
    }
    else if (e.code == "KeyT" && Gbdown == false) {
        Gb.cloneNode().play()
        Gbdown = true
        cells[4].style.backgroundColor = "rgb(211, 190, 164)";
        blackKeys[2].style.backgroundColor = "rgb(50, 50, 50)";
    }
  }, false);

  window.addEventListener('keyup', function (e) {
    if (e.code == "KeyH") {
        Adown = false
        cells[12].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[5].style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (e.code == "KeyJ") {
        Bdown = false
        cells[13].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[6].style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (e.code == "KeyA") {
        Cdown = false
        cells[7].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[0].style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (e.code == "KeyS") {
        Ddown = false
        cells[8].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[1].style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (e.code == "KeyD") {
        Edown = false
        cells[9].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[2].style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (e.code == "KeyF") {
        Fdown = false
        cells[10].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[3].style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (e.code == "KeyG") {
        Gdown = false
        cells[11].style.backgroundColor = "rgb(255, 228, 196)";
        whiteKeys[4].style.backgroundColor = "rgb(255, 255, 255)";
    }

    else if (e.code == "KeyY") {
        Abdown = false
        cells[5].style.backgroundColor = "rgb(255, 228, 196)";
        blackKeys[3].style.backgroundColor = "rgb(0, 0, 0)";
    }
    else if (e.code == "KeyU") {
        Bbdown = false
        cells[6].style.backgroundColor = "rgb(255, 228, 196)";
        blackKeys[4].style.backgroundColor = "rgb(0, 0, 0)";
    }
    else if (e.code == "KeyW") {
        Dbdown = false
        cells[1].style.backgroundColor = "rgb(255, 228, 196)";
        blackKeys[0].style.backgroundColor = "rgb(0, 0, 0)";
    }
    else if (e.code == "KeyE") {
        Ebdown = false
        cells[2].style.backgroundColor = "rgb(255, 228, 196)";
        blackKeys[1].style.backgroundColor = "rgb(0, 0, 0)";
    }
    else if (e.code == "KeyT") {
        Gbdown = false
        cells[4].style.backgroundColor = "rgb(255, 228, 196)";
        blackKeys[2].style.backgroundColor = "rgb(0, 0, 0)";
    }
  }, false);

  for (let i = 0; i < 7; i++) {
    whiteKeys[i].addEventListener("mousedown", () => {
        if (whiteKeys[i].children[0].textContent == "A" && Adown == false) {
            A.cloneNode().play()
            Adown = true
            cells[12].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[5].style.backgroundColor = "rgb(182, 182, 182)";
        }
        else if (whiteKeys[i].children[0].textContent == "B" && Bdown == false) {
            B.cloneNode().play()
            Bdown = true
            cells[13].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[6].style.backgroundColor = "rgb(182, 182, 182)";
        }
        else if (whiteKeys[i].children[0].textContent == "C" && Cdown == false) {
            C.cloneNode().play()
            Cdown = true
            cells[7].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[0].style.backgroundColor = "rgb(182, 182, 182)";
        }
        else if (whiteKeys[i].children[0].textContent == "D" && Ddown == false) {
            D.cloneNode().play()
            Ddown = true
            cells[8].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[1].style.backgroundColor = "rgb(182, 182, 182)";
        }
        else if (whiteKeys[i].children[0].textContent == "E" && Edown == false) {
            E.cloneNode().play()
            Edown = true
            cells[9].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[2].style.backgroundColor = "rgb(182, 182, 182)";
        }
        else if (whiteKeys[i].children[0].textContent == "F" && Fdown == false) {
            F.cloneNode().play()
            Fdown = true
            cells[10].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[3].style.backgroundColor = "rgb(182, 182, 182)";
        }
        else if (whiteKeys[i].children[0].textContent == "G" && Gdown == false) {
            G.cloneNode().play()
            Gdown = true
            cells[11].style.backgroundColor = "rgb(211, 190, 164)";
            whiteKeys[4].style.backgroundColor = "rgb(182, 182, 182)";
        }
    })

    whiteKeys[i].addEventListener("mouseup", () => {
        if (whiteKeys[i].children[0].textContent == "A") {
            Adown = false;
            cells[12].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[5].style.backgroundColor = "rgb(255, 255, 255)";
        }
        else if (whiteKeys[i].children[0].textContent == "B") {
            Bdown = false
            cells[13].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[6].style.backgroundColor = "rgb(255, 255, 255)";
        }
        else if (whiteKeys[i].children[0].textContent == "C") {
            Cdown = false
            cells[7].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[0].style.backgroundColor = "rgb(255, 255, 255)";
        }
        else if (whiteKeys[i].children[0].textContent == "D") {
            Ddown = false
            cells[8].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[1].style.backgroundColor = "rgb(255, 255, 255)";
        }
        else if (whiteKeys[i].children[0].textContent == "E") {
            Edown = false
            cells[9].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[2].style.backgroundColor = "rgb(255, 255, 255)";
        }
        else if (whiteKeys[i].children[0].textContent == "F") {
            Fdown = false
            cells[10].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[3].style.backgroundColor = "rgb(255, 255, 255)";
        }
        else if (whiteKeys[i].children[0].textContent == "G") {
            Gdown = false
            cells[11].style.backgroundColor = "rgb(255, 228, 196)";
            whiteKeys[4].style.backgroundColor = "rgb(255, 255, 255)";
        }
    })
  }

  for (let i = 0; i < 5; i++) {
    blackKeys[i].addEventListener("mousedown", () => {
        if (blackKeys[i].children[0].textContent == "G# A♭" && Abdown == false) {
            Ab.cloneNode().play()
            Abdown = true
            cells[5].style.backgroundColor = "rgb(211, 190, 164)";
            blackKeys[3].style.backgroundColor = "rgb(50, 50, 50)";
        }
        else if (blackKeys[i].children[0].textContent == "A# B♭" && Bbdown == false) {
            Bb.cloneNode().play()
            Bbdown = true
            cells[6].style.backgroundColor = "rgb(211, 190, 164)";
            blackKeys[4].style.backgroundColor = "rgb(50, 50, 50)";
        }
        else if (blackKeys[i].children[0].textContent == "C# D♭" && Dbdown == false) {
            Db.cloneNode().play()
            Dbdown = true
            cells[1].style.backgroundColor = "rgb(211, 190, 164)";
            blackKeys[0].style.backgroundColor = "rgb(50, 50, 50)";
        }
        else if (blackKeys[i].children[0].textContent == "D# E♭" && Ebdown == false) {
            Eb.cloneNode().play()
            Ebdown = true
            cells[2].style.backgroundColor = "rgb(211, 190, 164)";
            blackKeys[1].style.backgroundColor = "rgb(50, 50, 50)";
        }
        else if (blackKeys[i].children[0].textContent == "F# G♭" && Gbdown == false) {
            Gb.cloneNode().play()
            Gbdown = true
            cells[4].style.backgroundColor = "rgb(211, 190, 164)";
            blackKeys[2].style.backgroundColor = "rgb(50, 50, 50)";
        }
    })

    blackKeys[i].addEventListener("mouseup", () => {
        if (blackKeys[i].children[0].textContent == "G# A♭") {
            Abdown = false
            cells[5].style.backgroundColor = "rgb(255, 228, 196)";
            blackKeys[3].style.backgroundColor = "rgb(0, 0, 0)";
        }
        else if (blackKeys[i].children[0].textContent == "A# B♭") {
            Bbdown = false
            cells[6].style.backgroundColor = "rgb(255, 228, 196)";
            blackKeys[4].style.backgroundColor = "rgb(0, 0, 0)";
        }
        else if (blackKeys[i].children[0].textContent == "C# D♭") {
            Dbdown = false
            cells[1].style.backgroundColor = "rgb(255, 228, 196)";
            blackKeys[0].style.backgroundColor = "rgb(0, 0, 0)";
        }
        else if (blackKeys[i].children[0].textContent == "D# E♭") {
            Ebdown = false
            cells[2].style.backgroundColor = "rgb(255, 228, 196)";
            blackKeys[1].style.backgroundColor = "rgb(0, 0, 0)";
        }
        else if (blackKeys[i].children[0].textContent == "F# G♭") {
            Gbdown = false
            cells[4].style.backgroundColor = "rgb(255, 228, 196)";
            blackKeys[2].style.backgroundColor = "rgb(0, 0, 0)";
        }
    })
}
