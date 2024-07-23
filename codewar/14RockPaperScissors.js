// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};

function rps0(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  }

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 won!";
  }

  return "Player 2 won!";
}

const rps01 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  )
    return "Player 1 won!";
  return "Player 2 won!";
};

const rps2 = (p1, p2) => {
  const outcomes = {
    scissorspaper: "Player 1 won!",
    paperscissors: "Player 2 won!",
    paperrock: "Player 1 won!",
    rockpaper: "Player 2 won!",
    rockscissors: "Player 1 won!",
    scissorsrock: "Player 2 won!",
  };
  return p1 === p2 ? "Draw!" : outcomes[p1 + p2];
};

const rps3 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  return "Player 2 won!";
};

const rps4 = (p1, p2) => {
  const wins = { scissors: "paper", paper: "rock", rock: "scissors" };
  return p1 === p2
    ? "Draw!"
    : p2 === wins[p1]
    ? "Player 1 won!"
    : "Player 2 won!";
};

const rps5 = (p1, p2) => {
  const isDraw = p1 === p2;
  const p1Wins =
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors");
  return isDraw ? "Draw!" : p1Wins ? "Player 1 won!" : "Player 2 won!";
};

const rps6 = (p1, p2) => {
  const match = `${p1}${p2}`;
  const winCases = ["scissorspaper", "paperrock", "rockscissors"];
  if (p1 === p2) return "Draw!";
  if (winCases.includes(match)) return "Player 1 won!";
  return "Player 2 won!";
};

const rps7 = (p1, p2) => {
  const results = {
    rock: { rock: "Draw!", paper: "Player 2 won!", scissors: "Player 1 won!" },
    paper: { rock: "Player 1 won!", paper: "Draw!", scissors: "Player 2 won!" },
    scissors: {
      rock: "Player 2 won!",
      paper: "Player 1 won!",
      scissors: "Draw!",
    },
  };
  return results[p1][p2];
};

const rps8 = (p1, p2) => {
  const rules = { rock: "scissors", scissors: "paper", paper: "rock" };
  if (p1 === p2) return "Draw!";
  return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

const rps9 = (p1, p2) => {
  switch (true) {
    case p1 === p2:
      return "Draw!";
    case p1 === "scissors" && p2 === "paper":
    case p1 === "paper" && p2 === "rock":
    case p1 === "rock" && p2 === "scissors":
      return "Player 1 won!";
    default:
      return "Player 2 won!";
  }
};

const rps10 = (p1, p2) => {
  const winMap = {
    "scissors-paper": "Player 1 won!",
    "paper-rock": "Player 1 won!",
    "rock-scissors": "Player 1 won!",
    "paper-scissors": "Player 2 won!",
    "rock-paper": "Player 2 won!",
    "scissors-rock": "Player 2 won!",
  };
  return p1 === p2 ? "Draw!" : winMap[`${p1}-${p2}`];
};

// const Test = require("@codewars/test-compat");

// describe("rock paper scissors", function () {
//   const getMsg = (n) => `Player ${n} won!`;

//   it("player 1 win", function () {
//     Test.assertEquals(rps("rock", "scissors"), getMsg(1));
//     Test.assertEquals(rps("scissors", "paper"), getMsg(1));
//     Test.assertEquals(rps("paper", "rock"), getMsg(1));
//   });

//   it("player 2 win", function () {
//     Test.assertEquals(rps("scissors", "rock"), getMsg(2));
//     Test.assertEquals(rps("paper", "scissors"), getMsg(2));
//     Test.assertEquals(rps("rock", "paper"), getMsg(2));
//   });

//   it("draw", function () {
//     Test.assertEquals(rps("rock", "rock"), "Draw!");
//     Test.assertEquals(rps("scissors", "scissors"), "Draw!");
//     Test.assertEquals(rps("paper", "paper"), "Draw!");
//   });
// });
