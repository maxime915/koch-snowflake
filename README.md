# koch-snowflake
Koch snowflake partial fractal implementation in P5js

See [Wikipedia page](https://en.wikipedia.org/wiki/Koch_snowflake)

## P5js

P5js is a Javascript library allowing easy drawing in a browser, [see](http://p5js.org)

## Implementation

The base triangle is set to have is center in the widdle of the window, having the top line horizontal. The length of the first side is set to be 75% of the minimal sketch dimension.

The iteration consist in iterating through the already existing points and inserting the new one at each iteration.
