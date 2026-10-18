

document.addEventListener("DOMContentLoaded", function() {

    // Select the board squares and game elements
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector("button");
    const originalStatus = status.textContent;

    // Game variables
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

    // Exercise 1, 2 and 3 - Set up the board
    squares.forEach(function(square, index) {

        square.classList.add("square");

        // Handle player clicks
        square.addEventListener("click", function() {

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Update the internal game board
            gameBoard[index] = currentPlayer;

            // Exercise 4 - Check for a winner
            const winner = checkWinner();

            if (winner !== null) {
                status.textContent =
                    "Congratulations! " + winner + " is the Winner!";

                status.classList.add("you-won");
            }

            // Switch players
            currentPlayer = currentPlayer === "X" ? "O" : "X";

        });

        // Add hover effect
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });

        // Remove hover effect
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });

    });

    // Exercise 4 - Winner detection
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

    // Exercise 5 - Restart the game
    newGameButton.addEventListener("click", function() {

        // Reset the current player
        currentPlayer = "X";

        // Clear the internal game board
        gameBoard = ["", "", "", "", "", "", "", "", ""];

        // Clear all nine squares
        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        // Restore the original status message
        status.textContent = originalStatus;
        status.classList.remove("you-won");

    });

});
