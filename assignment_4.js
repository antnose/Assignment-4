function totalFine(fare) {
  // You have to write your code here

  if (fare > 0 && typeof fare === "number") {
    return fare + fare * (20 / 100) + 30;
  } else {
    return `Invalid`;
  }
}

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str === "string") {
    return str.replaceAll(" ", "").toUpperCase();
  } else {
    return `Invalid`;
  }
}

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof (player1 && player2) === "object") {
    if (
      player1.cardY + player1.cardR + player1.foul <
      player2.cardY + player2.cardR + player2.foul
    ) {
      return player1.name;
    } else if (
      player1.cardY + player1.cardR + player1.foul ===
      player2.cardY + player2.cardR + player2.foul
    ) {
      return `Tie`;
    } else {
      return player2.name;
    }
  } else {
    return `Invalid`;
  }
}
