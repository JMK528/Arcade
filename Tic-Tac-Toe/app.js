/* 
Requirements

-Intitial State:
  - Clear board with no X's or O's placed
  - A grid layout
  - Start Button
  - Computer player 
  - Input player names
- Check for Winning combo = vertical / horizontal / diagonal three X's or O's in a row
- Check for tie game - No winners 
 

  Stretch Goals--

- Smart Computer player(bonus)- 
    -Brainy(instead of randomly picking an empty spot): the "easy version" of this is to look 
    at all empty spots, and ask if any of them get you a win, if so, choose it, otherwise choose randomly.
    -SUPER BRAINY: for each look ahead, see if there's a win for the human player, if so eliminate those from the
    possible choices.

- Board Size Changes ( n-by-n)
  -  Here you could switch to either checking for the 3-of-a-kind still or for n-of-a-kind (row,horizontal, diagonal)


-Potenial Functions:
  - Adds X's and O's to the board
  - When the game is over
  - Reset the game

*/

let playerOne = "X"
let playerTwo = "O"
let currentPlayer = playerOne
let boardSelector  
let gameState = {
    players: ['x', 'o'],
    // board : ['','','','','','','','','']
    board: null,
    winningCombos:null
}

const restartBtn = document.querySelector("#restartBtn")
restartBtn.addEventListener('click', function(){
  board.innerHTML = ""
 if(boardSelector === 3){
  gameState.board = ['','','','','','','','','']
  createSizeOfBoard(9)
    board.style.display = "grid"
    board.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)"
 } else {
  gameState.board = ['','','','','','','','','','','','','','','','','','','','','','','','','']
  createSizeOfBoard(25)
    board.style.display = "grid"
    board.style.gridTemplate = "repeat(5, 1fr) / repeat(5, 1fr)"
 }
 board.addEventListener('click', onBoardClick)
 document.getElementById("winningMessage").innerText = ""
  
})

function checkForWinner() {

  for (let i = 0; i < gameState.winningCombos.length; i++) {
    // console.log(gameState.board[gameState.winningCombos[i][0]])
    // console.log(gameState.winningCombos[i].length)
    if (gameState.board[gameState.winningCombos[i][0]] !== "") {
      if (gameState.winningCombos[i].length > 3) {
        if (gameState.board[gameState.winningCombos[i][0]] === gameState.board[gameState.winningCombos[i][1]]
          && gameState.board[gameState.winningCombos[i][1]] === gameState.board[gameState.winningCombos[i][2]]
          && gameState.board[gameState.winningCombos[i][2]] === gameState.board[gameState.winningCombos[i][3]]
          && gameState.board[gameState.winningCombos[i][3]] === gameState.board[gameState.winningCombos[i][4]]) {
          //  console.log("fivewins")
          document.getElementById("winningMessage").innerText = currentPlayer + " " + "Wins Game!"
          board.removeEventListener('click', onBoardClick)
        }
      } else {
        if (gameState.board[gameState.winningCombos[i][0]] === gameState.board[gameState.winningCombos[i][1]]
          && gameState.board[gameState.winningCombos[i][1]] === gameState.board[gameState.winningCombos[i][2]]) {
          document.getElementById("winningMessage").innerText = currentPlayer + " " + "Wins Game!"
          board.removeEventListener('click', onBoardClick)
        }
      }
    }
  }
}

function onBoardClick(event) {
  console.log("onBoardClick")
  if(event.target.innerText === ""){
    event.target.innerText = currentPlayer
    //currentPlayer into board at clicked position 
    const position = event.target.getAttribute("id")
    // replace the value in the board
    gameState.board[position] = currentPlayer
    // console.log(gameState.board)
    checkForWinner()    
  // console.log(position)
    if(currentPlayer === "X" ){
      currentPlayer = "O"
    }else{ currentPlayer = "X"
      } 
  }    
}

const board = document.getElementById('board');
board.addEventListener('click', onBoardClick)


const threeBoardBtn = document.querySelector("#ThreeBtn")
threeBoardBtn.addEventListener('click',function() {
  threeBoard()
});


function threeBoard(){
  boardSelector = 3
  board.innerHTML = ""
  gameState.board = ['','','','','','','','','']
  gameState.winningCombos =  [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    //vertical win check
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    //diagonal win check
    ["0","4","8"],
    ["2","4","6"]
    ]
    createSizeOfBoard(9)
    board.style.display = "grid"
    board.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)"
}

const fiveBoardBtn = document.querySelector("#FiveBtn")
fiveBoardBtn.addEventListener('click',function (){
  fiveBoard()
})

function fiveBoard(){
  boardSelector = 5
  board.innerHTML = ""
  gameState.board = ['','','','','','','','','','','','','','','','','','','','','','','','','']
  gameState.winningCombos =  [
    // horizontal win check
    ["0","1","2","3","4"],
    ["5","6","7","8","9"],
    ["10","11","12","13","14"],
    ["15","16","17","18","19"],
    ["20","21","22","23","24"],  
    //vertical win check
    ["0","5","10","15","20"],
    ["1","6","11","16","21"],
    ["2","7","12","17","22"],
    ["3","8","13","18","23"],
    ["4","9","14","19","24"],
    //diagonal win check
    ["0","6","12","18","24"],
    ["4","8","12","16","20"]
    ]
    createSizeOfBoard(25)
    board.style.display = "grid"
    board.style.gridTemplate = "repeat(5, 1fr) / repeat(5, 1fr)"
}


function createSizeOfBoard(number){  
  
  for(let i = 0; i < number;i++){
    // for(let j = 0; j < number;j++)
    const div= document.createElement("div")
    div.setAttribute("id", i) 
    div.setAttribute("class", "cell") 
    // console.log(div)
    board.append(div) 
  }


}




//Things not being used at the  moment


  // const winningCombos= [
  // //horizontal win check
  // ["0","1","2"],
  // ["3","4","5"],
  // ["6","7","8"],
  // //vertical win check
  // ["0","3","6"],
  // ["1","4","7"],
  // ["2","5","8"],
  // //diagonal win check
  // ["0","4","8"],
  // ["2","4","6"]
  // ]


    // board: [
    //   [null, null, null],
    //   [null, null, null],
    //   [null, null, null]
    // ]


  // function addXToBoard(){
  //   const [y, x] = gameState.playerOne
  //   gameState.board[y][x] ="X"
  // }
  
  // function addOToBoard(){
  //   const [y, x] = gameState.playerTwo
  //   gameState.board[y][x] ="O"
  // }
  
  
  // function updateHTMLBoard() { // this is your renderState function
  //   let xCell = document.querySelector("div[data-coordinates='" + gameState.playerOne + "']")
  
  //   xCell.classList.add("X")
  
  //   let oCell = document.querySelector("div[data-coordinates='" + gameState.playerTwo+ "']")
  
  //   oCell.classList.add("O")
  // }
  
  // cellElements = document.querySelectorAll('cell')