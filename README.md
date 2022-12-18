## Purpose of this repository

This is a project for students participating in Software Testing course
at Tampere University.

This repository performs unit tests for 10 functions in the ./src

## Tested functions

- capitalize.js
- ceil.js
- defaultToAny.js
- filter.js
- isEmpty.js
- reduce.js
- toNumber.js
- toString.js
- words.js

## Testing framework

We use mocha and chai, so the tests are in the `test` folder and named in the style of `func.test.js`

## How to run

Instructions for local coverage:

1. Clone or download this repository
2. `npm install`

3. `npm test` (for only tests)
4. `npm run coverage` (for coverage report)

The coverage report can be found the ine `/coverage/lcov-report` folder, by opening `index.html`
