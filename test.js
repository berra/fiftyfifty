import fiftyfifty, { coinflip } from "./index.js";

const x = fiftyfifty();

if (x === true) {
  console.log("It's true!");
} else if (x === false) {
  console.log("It's false!");
} else {
  throw new Error("Something is wrong!");
}

const coin = coinflip();

if (coin === "heads") {
  console.log("It's heads!");
} else if (coin === "tails") {
  console.log("It's tails!");
} else {
  throw new Error("Something is wrong!");
}
