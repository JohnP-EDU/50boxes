function displayBoxes() {
  for (let i = 0; i < 50; i++) {
    let number = Math.floor(Math.random() * 160) + 1;
    let div = document.createElement("div");
    div.className = "box";
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "blue";
    div.onclick = function() {
      div.innerHTML = number;
      div.style.backgroundColor = "red";
    };
    document.body.appendChild(div);
  }
}

displayBoxes();
