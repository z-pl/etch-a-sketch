const gridContainer = document.querySelector(".grid-container");
const eraserBtn = document.querySelector(".eraser-btn");
const drawBtn = document.querySelector(".draw-btn");

const smallPixelBtn = document.querySelector(".canvas-small-btn");
const mediumPixelBtn = document.querySelector(".canvas-medium-btn");
const largePixelBtn = document.querySelector(".canvas-large-btn");

let canvasSize = "canvas-small";
let bToggleActiveDraw = false;
let bToggleEraser = false;
//let i = 1;
for (let j = 0; j < 12000; j += 1) {
  gridContainer.insertAdjacentHTML("beforeend", `<div class="grid-item"></div>`);
  const gridItem = gridContainer.lastElementChild;
  //i++;
    gridItem.addEventListener('mouseenter', (event)=> {
      activeDrawingTool(gridItem);
    })
}

function activeDrawingTool(gridElement) {
  if (bToggleActiveDraw) {
    gridElement.style.backgroundColor = "black";
  }
  else if (bToggleEraser) {
    gridElement.style.backgroundColor = "white";
  }
}

function createCanvasBoard(rowSize ) {
  gridContainer.innerHTML = '';
  for (let j = 0; j < rowSize; j += 1) {
    gridContainer.insertAdjacentHTML("beforeend", `<div class="grid-item"></div>`);
    const gridItem = gridContainer.lastElementChild;
    //i++;
      gridItem.addEventListener('mouseenter', (event)=> {
        activeDrawingTool(gridItem);
      })
  }
}

function toggleActiveDraw() {
  bToggleActiveDraw  = !bToggleActiveDraw;
  bToggleEraser = false;
}

function toggleEraser() {
  bToggleEraser  = !bToggleEraser;
  bToggleActiveDraw  = false;
}

/// Toggle drawing tools
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    toggleActiveDraw();
  }
  else if (e.code == "KeyE") {
    toggleEraser();
  }
});

drawBtn.addEventListener("click", (e)=> {
  toggleActiveDraw();
});

eraserBtn.addEventListener("click", (e)=> {
  toggleEraser();
});

smallPixelBtn.addEventListener("click", (e) => {
  if (!(gridContainer.classList.contains("canvas-small"))) {
    gridContainer.classList.toggle(canvasSize);
    gridContainer.classList.toggle("canvas-small");
    canvasSize = "canvas-small";
    createCanvasBoard(12000);
  }
});

mediumPixelBtn.addEventListener("click", (e) => {
  if (!(gridContainer.classList.contains("canvas-medium"))) {
    gridContainer.classList.toggle(canvasSize);
    gridContainer.classList.toggle("canvas-medium");
    canvasSize = "canvas-medium";
    createCanvasBoard(3000);
  }
});

largePixelBtn.addEventListener("click", (e) => {
  if (!(gridContainer.classList.contains("canvas-large"))) {
    gridContainer.classList.toggle(canvasSize);
    gridContainer.classList.toggle("canvas-large");
    canvasSize = "canvas-large";
    createCanvasBoard(750);

  }
});
