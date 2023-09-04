const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = [

    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '

]


/* Const is a assignment of a variable 
    variable is a value that you assign
    [ ] = array - used to store list of object aka data
*/


let go = 'circle'
infoDisplay.textContent = 'Circle go First'



function createBoard() {

    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameboard.append(cellElement)
    })
}

createBoard()


function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'circle' ?  'cross': 'circle'
    infoDisplay.textContent = 'it is now  '+ go + "'s go."
    e.target.removeEventListener ('click',addGo)
    checkScore()
}

function checkScore (){
  const allSquares =document.querySelectorAll('.square')
  console.log(allSquares)
  const winningCombos = [
   [0,1,2], [3,4,5],[6,7,8],
   [0,3,6], [1,4,7],[2,5,8],
   [0,4,8], [2,4,6]

  ]

  console.log(allSquares[4])

  winningCombos.forEach (array => {
     const circleWins =
     array.every(cell=> allSquares[cell].firstChild?.classList.contains('circle'))

 

  if (circleWins) {
      infoDisplay.textContent = "Circle Wins !"
      allSquares.foreach (square => replacewith(square.cloneNode(true)))
      return

  }

  })

// e = event
// Append means assign or add value to an existing object
// we need to Append "something" inside the line from console <div class="square" id="5">
// Child under some of the square defined who wins 


console.log(allSquares[4])

  winningCombos.forEach (array => {
     const crossWins =
     array.every(cell=> allSquares[cell].firstChild?.classList.contains('cross'))

 

  if (crossWins) {
      infoDisplay.textContent = "Cross Wins !"
      allSquares.foreach (square => replacewith(square.cloneNode(true)))
      return

  }

  })

}