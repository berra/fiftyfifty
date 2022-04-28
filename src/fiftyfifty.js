export default function fiftyfifty(trueValue = true, falseValue = false) {
  return Boolean(Math.round(Math.random())) ? trueValue : falseValue;
}
