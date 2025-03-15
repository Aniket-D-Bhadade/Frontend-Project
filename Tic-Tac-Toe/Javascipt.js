let body = document.querySelector("body");
let Player = "X";
let b1 = document.querySelector(".box0");
let b2 = document.querySelector(".box1");
let b3 = document.querySelector(".box2");
let b4 = document.querySelector(".box3");
let b5 = document.querySelector(".box4");
let b6 = document.querySelector(".box5");
let b7 = document.querySelector(".box6");
let b8 = document.querySelector(".box7");
let b9 = document.querySelector(".box8");

let val0 = 2;
let val1 = 2;
let val2 = 2;
let val3 = 2;
let val4 = 2;
let val5 = 2;
let val6 = 2;
let val7 = 2;
let val8 = 2;
let reset = document.querySelector("#RESETBUTTON") ;
reset.addEventListener("click",()=>{
  alert("WARNNING !! GAME IS GOING TO RESET") ;
  location.reload();
})

// Function for Making a move 
function makeMove(tile) {
  if (tile.innerHTML !== "") { 
    alert("INVALID MOVE! THIS TILE IS NOT EMPTY"); 
    return; 
  }
  if (Player === "X") {
    tile.innerHTML = "<h5>X</h5>";
    Player = "O";
    console.log(Player);
  } else {
    tile.innerHTML = "<h5>O</h5>";
    Player = "X" ;
    console.log(Player);
  }
  winnerChecking() ;
}

// Function for checking Winner 
function winnerChecking() { 
  const winCombinations = [ [val0, val1, val2], 
  [val3, val4, val5], 
  [val6, val7, val8], 
  [val0, val3, val6], 
  [val1, val4, val7], 
  [val2, val5, val8], 
  [val0, val4, val8], 
  [val2, val4, val6] ]; 
  for (let combo of winCombinations) { 
    if (combo[0] === combo[1] && combo[1] === combo[2] && (combo[0] === 0 || combo[0] === 1)) { 
      const winner = combo[0] === 0 ? "O" : "X"; alert(`The winner is "${winner}" !!`); 
      break; 
    } 
  } 
}





b1.addEventListener("click", () => {
  if (Player == "X") {
    val0 = 1;
  } else {
    val0 = 0;
  }
  console.log(val0)
  makeMove(b1);
});
b2.addEventListener("click", () => {
  if (Player == "X") {
    val1 = 1;
  } else {                      
    val1 = 0;
  }
  console.log(val1)
  makeMove(b2);
});
b3.addEventListener("click", () => {
  if (Player == "X") {
    val2 = 1;
  } else {
    val2 = 0;
  }
  console.log(val2)
  makeMove(b3);
});
b4.addEventListener("click", () => {
  if (Player == "X") {
    val3 = 1;
  } else {
    val3 = 0;
  }
  console.log(val3)
  makeMove(b4)
});
b5.addEventListener("click", () => {
  if (Player == "X") {
    val4 = 1;
  } else {
    val4 = 0;
  }
  console.log(val4)
  makeMove(b5);
});
b6.addEventListener("click", () => {
  if (Player == "X") {
    val5 = 1;
  } else {
    val5 = 0;
    console.log(val5)
  }
  makeMove(b6);
});
b7.addEventListener("click", () => {
  if (Player == "X") {
    val6 = 1;
  } else {
    val6 = 0;
  }
  console.log(val6)
  makeMove(b7);
});
b8.addEventListener("click", () => {
  if (Player == "X") {
    val7 = 1;
  } else {
    val7 = 0;
  }
  console.log(val7)
  makeMove(b8);
});
b9.addEventListener("click", () => {
  if (Player == "X") {
    val8 = 1;
  } else {
    val8 = 0;
  }
  console.log(val8)
  makeMove(b9);
});
