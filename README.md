# steamroll-array

A simple utility to flatten nested arrays of any depth.

## Installation

```bash
npm install steamroll-array

## Example Usage

```javascript
// Import the steamroll function
const steamrollArray = require('steamroll-array');

// Example of flattening a nested array
const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result); // Output: [1, 2, 3, 4]

