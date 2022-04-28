import fiftyfifty, { coinflip } from "./index.js";

const x = fiftyfifty();

console.log("");
if (x === true) {
  console.log("Testing fiftyfifty with default values ---- It's true!", true);
} else if (x === false) {
  console.log("Testing fiftyfifty with default values ---- It's false!", true);
} else {
  throw new Error("Something is wrong!");
}

const y = fiftyfifty(1, 0);

console.log("");

if (y === 1) {
  console.log(
    "Testing fiftyfifty with custom values (1, 0) ---- It's `1`",
    true
  );
} else if (y === 0) {
  console.log(
    "Testing fiftyfifty with custom values (1, 0) ---- It's `0`",
    false
  );
} else {
  throw new Error("Something is wrong!");
}

const coin = coinflip();

console.log("");

if (coin === "heads") {
  console.log("Testing coinflip ---- It's heads!", true);
} else if (coin === "tails") {
  console.log("Testing coinflip ---- It's tails!", false);
} else {
  throw new Error("Something is wrong!");
}

let heads = 0,
  tails = 0;

console.log("");

const number = 10000;

console.time(`${number} coinflips`);

for (let x = 0, y = number; x < y; x++) {
  const coin = coinflip();
  if (coin === "heads") heads++;
  if (coin === "tails") tails++;
}

console.log("");
console.timeEnd(`${number} coinflips`);
console.log("");
console.log("Result:");
console.log(`- heads: ${heads}`);
console.log(`- tails: ${tails}`);
