document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";

    squares.forEach(function(square) {
        square.classList.add("square");

        square.addEventListener("click", function() {

            square.textContent = currentPlayer;

            square.classList.add(currentPlayer);

            currentPlayer = currentPlayer === "X" ? "O" : "X";

        });
    });

});