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
  if (typeof player1 === "object" && typeof player2 === "object") {
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

function isSame(arr1, arr2) {
  // You have to write your code here

  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return `Invalid`;
  }
}

function resultReport(marks) {
  // You have to write your code here
  let obj = {};
  let pass = 0;
  let fail = 0;
  let avg = 0;
  if (Array.isArray(marks)) {
    for (let mark of marks) {
      if (mark > 39) {
        pass++;
      } else {
        fail++;
      }
      avg += mark;
    }
  } else {
    return `Invalid`;
  }

  if (marks.length === 0) {
    obj["finalScore"] = 0;
  } else {
    obj["finalScore"] = Math.round(avg / marks.length);
  }

  obj["pass"] = pass;
  obj["fail"] = fail;
  return obj;
}
