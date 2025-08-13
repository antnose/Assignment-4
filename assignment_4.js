function totalFine(fare) {
  // You have to write your code here

  if (fare > 0 && typeof fare === "number") {
    return fare + fare * (20 / 100) + 30;
  } else {
    return `Invalid`;
  }
}
