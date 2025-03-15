let RockChoice = document.querySelector("#Rock");
let PaperChoice = document.querySelector("#Paper");
let ScissorChoice = document.querySelector("#Seissors");
let HumanChoice = "Null";
let Possible = ["Rock", "Paper", "Seissors"];

function AI() {
  const num = Math.round(Math.random() * 2);
  return Possible[num];
}

RockChoice.addEventListener("click", () => {
  HumanChoice = "Rock";
  let AIchoice = AI() ;
  winnerCheck(HumanChoice,AIchoice) ;
  ReturnAI(AIchoice) ;
});
PaperChoice.addEventListener("click", () => {
    HumanChoice = "Paper";
    let AIchoice = AI() ;
    winnerCheck(HumanChoice,AIchoice) ;
    ReturnAI(AIchoice) ;
});
ScissorChoice.addEventListener("click", () => {
    HumanChoice = "Seissors";
    let AIchoice = AI() ;
    winnerCheck(HumanChoice,AIchoice) ;
    ReturnAI(AIchoice) ;
});

function winnerCheck(human, AI) {
  if (human === AI) {
    console.log("It's a Tie!!");
  } else if (
    (human === "Rock" && AI === "Seissors") ||
    (human === "Paper" && AI === "Rock") ||
    (human === "Seissors" && AI === "Paper")
  ) {
    console.log("You Win!!");
  } else {
    console.log("You Lost!!");
  }
}
function ReturnAI ( x ){
    alert(`AI Choose : ${x}`);
}
