//your JS code here. If required.
const container = document.getElementById("container");
const SQUARES = 800;

const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#f1c40f"
];

for(let i=0;i<SQUARES;i++){
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;
  });

  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#1d1d1d";
  });

  container.appendChild(square);
}

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}

