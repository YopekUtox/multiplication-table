const tab = document.querySelector(".tab");

let content = "<table>";

for (let i = 1; i <= 10; i++) {
  content += "<tr>";
  for (let j = 1; j <= 10; j++) {
    content += `<td data-row="${i}" data-col="${j}">` + j * i + "</td>";
  }
  content += "</tr>";
}

tab.innerHTML = content;

let cells = document.querySelectorAll("td");

function paintCell(e, color) {
  console.log(e.target.dataset.row);
  let x = e.target.dataset.row;
  let y = e.target.dataset.col;
  let h1 = document.querySelector(`[data-row="${1}"][data-col="${y}"]`);
  let h2 = document.querySelector(`[data-row="${x}"][data-col="${1}"]`);
  h2.style.backgroundColor = color;
  h1.style.backgroundColor = color;
}

cells.forEach((cell) => {
  cell.addEventListener("mouseleave", (e) => {
    paintCell(e, "transparent");
  });
  cell.addEventListener("mouseover", (e) => {
    paintCell(e, "red");
  });
});
