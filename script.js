const gridContainer = document.querySelector(".grid-container");
const eraserBtn = document.querySelector(".eraser-btn");
const drawBtn = document.querySelector(".draw-btn");

let bToggleActiveDraw = false;
let bToggleEraser = false;
//let i = 1;
for (let j = 0; j < 3000; j += 1) {
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
})


drawBtn.addEventListener("click", (e)=> {
  toggleActiveDraw();
})

eraserBtn.addEventListener("click", (e)=> {
  toggleEraser();
})
