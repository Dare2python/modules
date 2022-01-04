const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

// import { addTwo } from './addTwo.mjs';
// const addTwo = require('./addTwo.mjs');

// Prints: 6
// console.log(addTwo(4));

(async () => {
    const addTwo = await import('./addTwo.mjs');

    console.log(`${addTwo.addTwo(4)}`);
})().catch(err => console.error(err));