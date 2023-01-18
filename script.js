const X_CLASS = "x"
const CIRCLE_CLASS = "circle"
const cellElements = document.querySelectorAll(".cell")
const board = document.getElementById("board")

let circleTurn
startGame()

function startGame(){
    circleTurn=false
    cellElements.forEach(cell => {
        cell.addEventListener("click", handleClick, { once: true })
    })
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    swapTurn()
    setBoardHoverClass()
}


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurn() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    }
    else { board.classList.add(X_CLASS) }
}
