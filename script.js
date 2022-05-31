const boxes = document.querySelectorAll(".box")
const heading = document.querySelector(".heading")
const board = document.querySelector(".board")
const container = document.querySelector(".container")
const boxesList = Object.values(boxes)

let myCanvas = document.createElement('canvas');
container.appendChild(myCanvas);


const WIN_COBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4 ,6],
]
const PLAYER_1 = 'X'
const PLAYER_2 = 'O'
let CURRENT_PLAYER = PLAYER_1 



const player_1_moves = []
const player_2_moves = []


function changePlayer() {
    if (CURRENT_PLAYER === PLAYER_1) {
        CURRENT_PLAYER = PLAYER_2
    } else {
        CURRENT_PLAYER = PLAYER_1
    }

}


for(box of boxes) {
    box.addEventListener('click', clicked)

}



function clicked(e) {
    e.target.textContent = CURRENT_PLAYER
    e.target.classList.add('clicked')
    if (e.target.textContent === 'X') {
        player_1_moves.push(boxesList.indexOf(e.target))
    } else {
        player_2_moves.push(boxesList.indexOf(e.target))
    }
    changePlayer()
    checkBoard()
}




function checkBoard() {
    
    for(combo of WIN_COBOS) {
            if(player_1_moves.includes(combo[0]) && player_1_moves.includes(combo[1]) && player_1_moves.includes(combo[2])){
                heading.textContent = "X's Won"
                confetti({
                    particleCount: 100,
                    startVelocity: 30,
                    spread: 360,
                    origin: {
                      x: 0.5,
                      // since they fall down, start a bit higher than random
                      y: 0.5
                    }
                  });
                stopGame()
                break
            } else if (player_2_moves.includes(combo[0]) && player_2_moves.includes(combo[1]) && player_2_moves.includes(combo[2])){
                heading.textContent = "O's Won"
                confetti({
                    particleCount: 100,
                    startVelocity: 30,
                    spread: 360,
                    origin: {
                      x: 0.5,
                      y: 0.5
                    }
                  });
                stopGame()
                break
            } else if ((player_1_moves.length + player_2_moves.length) === 9) {
                heading.textContent = "It's a draw"
                stopGame()
            }
    }

        
}



function stopGame() {
    board.classList.add("game-end")
}





