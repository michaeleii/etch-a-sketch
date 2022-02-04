const gridContainer = document.querySelector(".container")

function createGrid () {
    const newDiv = document.createElement("div"); 
    gridContainer.appendChild(newDiv);
    newDiv.className = "square";
}

function removeGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

}

function clearGrid () {
    const squareDiv = document.querySelectorAll("div.square"); 
    for (let i = 0; i < 256; i++) {
        squareDiv[i].style.backgroundColor = "grey"
    }
}
function buttonAnimation (button) {
    button.classList.add('pressed')
    setTimeout(function () {
        button.classList.remove('pressed')
    }, 100);
}

function setGrid() {
    let dimensions = prompt("What width and height do you want your grid to be?");
    while (dimensions > 20) {
        dimensions = prompt("Grid size is over the limit please try a value under 20.")
    }
    const amountOfSquares = dimensions * dimensions;
    gridContainer.style.setProperty('--square-dimension', dimensions);
    drawGrid(amountOfSquares);
}

function drawGrid(squares) {
    for (let i = 0; i < squares; i++) {

    createGrid();
    const squareDiv = document.querySelectorAll("div.square"); 

    squareDiv[i].addEventListener('mouseover', function () {
        squareDiv[i].style.backgroundColor = "indianred"
    })
    // squareDiv[i].addEventListener("mouseleave", function () {
    //     squareDiv[i].style.backgroundColor = "grey"
    // })
    squareDiv[i].addEventListener('click', function () {
        squareDiv[i].style.backgroundColor = "indianred"
    })

}
}

drawGrid(256);



const clearButton = document.querySelector("button.clear-canvas");

clearButton.addEventListener('click', function () {
    clearGrid();
    buttonAnimation(clearButton);
})

const gridSizeButton = document.querySelector("button.set-grid");

gridSizeButton.addEventListener('click', function () {
    removeGrid()
    setGrid();
    buttonAnimation(gridSizeButton);
})

