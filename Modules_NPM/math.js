const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;
/*
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
*/
//or 
/*
exports.add = add;
exports.PI = PI;
exports.square = square;
*/
//or

const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;