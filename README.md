# fiftyfifty

Is it true or is it false?

## Installation

```
npm install fiftyfifty@latest
```

## How to use

This section describes how to use this package.

### Default usage

```javascript
import fiftyfifty from "fiftyfifty";

const x = fiftyfifty(); // x is `true` or `false`
```

### Flip a coin

```javascript
import { coinflip } from "fiftyfifty";

const coin = coinflip(); // coin is "heads" or "tails"
```

### Advanced usage

Send trueValue and/or falseValue to fiftyfifty to set custom returns.

```javascript
import fiftyfifty from "fiftyfifty";

const answer = fiftyfifty("right", "wrong");

console.log(answer); // "right" or "wrong"
```


This project is tested with Browserstack
