const X= 'x'
const Circle = 'circle'
const wins= [
  [0, 1, 2],[3, 4, 5],[6, 7, 8],
  [0, 3, 6],[1, 4, 7],[2, 5, 8],
  [0, 4, 8],[2, 4, 6]
]
const cells = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningText= document.querySelector('[winning-text]')

let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cells.forEach(cell => {
    cell.classList.remove(X)
    cell.classList.remove(Circle)
    cell.removeEventListener('click', Click)
    cell.addEventListener('click', Click, { once: true })
  })
  hover()
  winningElement.classList.remove('show')
}

function Click(e) {
  const cell = e.target
  const currentClass = circleTurn ? Circle : X
  cell.classList.add(currentClass)
  if (checkWin(currentClass)) {
    end(false)
  } else if (draw()) {
    end(true)
  } else {
    circleTurn = !circleTurn
    hover()
  }
}

function checkWin(currentClass) {
  return wins.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass)
    })
  })
}

function draw() {
  return [...cells].every(cell => {
    return cell.classList.contains(X) || cell.classList.contains(Circle)
  })
}

function end(draw) {
  if (draw) {
    winningText.innerText = 'Draw!'
  } else {
    winningText.innerText = `${circleTurn ? Circle : X} Wins!`
  }
  winningElement.classList.add('show')
}

function hover() {
  board.classList.remove(X)
  board.classList.remove(Circle)
  if (circleTurn) {
    board.classList.add(Circle)
  } else {
    board.classList.add(X)
  }
}

