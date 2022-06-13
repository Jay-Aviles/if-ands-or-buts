
let playGame = confirm("Lets play?");
if (playGame) {
  let playerChoice = prompt("rock, paper, or scissors?");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
    } else {
      alert("Enter rock, paper, or scissors");
    }
  } else {
    alert("Try again");
  }
} else {
  alert("Maybe next time");
}

