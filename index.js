//document.getElementById("count-el").innerText = 5;

// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}



function save() {
  let countStr = ' ' + count + " - ";
  saveEl.innerText += countStr;
  console.log(count)

  countEl.innerText = 0;
  count = 0;
}