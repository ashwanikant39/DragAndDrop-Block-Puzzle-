let cell = document.querySelectorAll(".cell");

// console.log(cell)
cell.forEach((everyCell) => {
  everyCell.addEventListener("click", () => {
    // cell.classList.add(".cell-clicked");
    // console.log("clicked")
    everyCell.classList.add("cell-clicked");
  });
});
