import fiftyfifty from "./index.js";

const x = fiftyfifty();

if (x === true) {
  console.log("It's true!");
} else if (x === false) {
  console.log("It's false!");
} else {
  throw new Error("Something is wrong!");
}
