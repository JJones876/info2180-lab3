
document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");

    let currentPlayer = "X";

    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // All 8 possible winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Set up each square
    squares.forEach(function(square, index) {

        square.classList.add("square");

        // Handle player clicks
        square.addEventListener("click", function() {

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Update the game board
            gameBoard[index] = currentPlayer;

            // Check whether someone has won
            const winner = checkWinner();

            if (winner !== null) {
                status.textContent =
                    "Congratulations! " + winner + " is the Winner!";

                status.classList.add("you-won");
            }

            // Switch players
            currentPlayer = currentPlayer === "X" ? "O" : "X";

        });

        // Mouse enters square
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });

        // Mouse leaves square
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });

    });

    // Check for a winner
    function checkWinner() {

        for (let combination of winningCombinations) {

            const [a, b, c] = combination;

            if (
                gameBoard[a] !== "" &&
                gameBoard[a] === gameBoard[b] &&
                gameBoard[b] === gameBoard[c]
            ) {
                return gameBoard[a];
            }
        }

        return null;
    }

});
