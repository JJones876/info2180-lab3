document.addEventListener("DOMContentLoaded", function() {

    // Select the game elements
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector("button");
    const originalStatus = status.textContent;

    // Game variables
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;

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

    // Exercises 1, 2, 3 and 6 - Set up the board
    squares.forEach(function(square, index) {

        // Apply square styling
        square.classList.add("square");

        // Handle player clicks
        square.addEventListener("click", function() {

            // Exercise 6 - Prevent cheating
            // Ignore occupied squares or clicks after a win
            if (gameBoard[index] !== "" || gameOver) {
                return;
            }

            // Display the current player's symbol
            square.textContent = currentPlayer;

            // Apply X or O styling
            square.classList.add(currentPlayer);

            // Update the internal game board
            gameBoard[index] = currentPlayer;

            // Exercise 4 - Check for a winner
            const winner = checkWinner();

            if (winner !== null) {

                // Mark the game as finished
                gameOver = true;

                // Display the winning message
                status.textContent =
                    "Congratulations! " + winner + " is the Winner!";

                // Apply winning message styling
                status.classList.add("you-won");
            }

            // Switch players only if the game continues
            if (!gameOver) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }

        });

        // Exercise 3 - Add hover effect
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });

        // Exercise 3 - Remove hover effect
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

        // No winner found
        return null;
    }

    // Exercise 5 - Restart the game
    newGameButton.addEventListener("click", function() {

        // Reset game variables
        currentPlayer = "X";
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        gameOver = false;

        // Clear all nine squares
        squares.forEach(function(square) {

            square.textContent = "";

            // Remove player and hover styling
            square.classList.remove("X", "O", "hover");

        });

        // Restore the original status message
        status.textContent = originalStatus;
        status.classList.remove("you-won");

    });

});
