document.addEventListener("DOMContentLoaded", function() {
    const dodger = document.getElementById("dodger");
    
    const containerWidth = 400; // width of the container
    const containerHeight = 400; // height of the container
    const dodgerWidth = 40; // width of the dodger
    const dodgerHeight = 40; // height of the dodger
    let moveLeft = false;
    let moveRight = false;
    let moveUp = false;
    let moveDown = false;

    function updatePosition() {
        let left = parseInt(dodger.style.left.replace("px", "")) || 0;
        let top = parseInt(dodger.style.top.replace("px", "")) || 0;

        if (moveLeft && left > 0) {
            dodger.style.left = `${left - 1}px`;
        }
        if (moveRight && left + dodgerWidth < containerWidth) {
            dodger.style.left = `${left + 1}px`;
        }
        if (moveUp && top > 0) {
            dodger.style.top = `${top - 1}px`;
        }
        if (moveDown && top + dodgerHeight < containerHeight) {
            dodger.style.top = `${top + 1}px`;
        }
    }

    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            moveLeft = true;
        } else if (e.key === "ArrowRight") {
            moveRight = true;
        } else if (e.key === "ArrowUp") {
            moveUp = true;
        } else if (e.key === "ArrowDown") {
            moveDown = true;
        }
    });

    document.addEventListener("keyup", function(e) {
        if (e.key === "ArrowLeft") {
            moveLeft = false;
        } else if (e.key === "ArrowRight") {
            moveRight = false;
        } else if (e.key === "ArrowUp") {
            moveUp = false;
        } else if (e.key === "ArrowDown") {
            moveDown = false;
        }
    });

    function gameLoop() {
        updatePosition();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
