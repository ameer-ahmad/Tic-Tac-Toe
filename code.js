const PLAYER_ONE_SYMBOL = 'X';
const PLAYER_TWO_SYMBOL = 'O';

class TicTacToeGame {


    handleSquareClick(event) {
        this.executeMove(event.target.id);
    }

    executeMove(moveIndex) {
        if (this.board[moveIndex] == "") {
            this.board[moveIndex] = this.currentPlayer;
            this.updateBoard();
            if (this.gameHasWinner()) {
                alert("Player " + this.currentPlayer + " is the winner!");
                this.start();

            } else {
                this.currentPlayer = (this.currentPlayer == PLAYER_ONE_SYMBOL ?
                    PLAYER_TWO_SYMBOL :
                    PLAYER_ONE_SYMBOL);
                document.getElementById('playerTurn').innerText = ('Player ' + this.currentPlayer + ' Turn');
            }
        }
    }

    updateBoard() {
        let gameBoard = document.getElementById('gameBoard');
        let squareElements = gameBoard.childNodes;
        squareElements.forEach((element, index) => {
            if (element.innerText != this.board[index]) {
                element.innerText = this.board[index];
            }
        });
    }

    gameHasWinner() {
        console.log('is this running');
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombos.find(combo => {
            if (this.board[combo[0]] != "" && this.board[combo[1]] != "" && this.board[combo[2]] != "" && this.board[combo[0]] == this.board[combo[1]] && this.board[combo[1]] == this.board[combo[2]]) {

                return true;

            }

            return false;
        });
    }

    drawBoard() {
        document.body.innerHTML = "<h1 id='playerTurn'>Player X Turn</h1>";
        let gameBoard = document.createElement('div');
        gameBoard.id = 'gameBoard';
        gameBoard.classList.add('board');
        gameBoard.addEventListener('click', this.handleSquareClick.bind(this));

        this.board.forEach((square, index) => {
            let squareElement = document.createElement('div');
            squareElement.id = index;
            squareElement.classList.add('square');

            gameBoard.appendChild(squareElement);
        });

        document.body.appendChild(gameBoard);
    }


    start() {
        this.board = [
            "", "", "",
            "", "", "",
            "", "", ""
        ];
        this.currentPlayer = PLAYER_ONE_SYMBOL;
        this.drawBoard();
    }

}

const game = new TicTacToeGame();
game.start();