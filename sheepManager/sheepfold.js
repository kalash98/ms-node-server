export { spawn, pop, get };

/**
 * Keep track of current sheep number
 * @type {number}
 */
let nbSheep = 0;

/**
 * Add a new sheep in the sheepfold
 */
function spawn() {
    nbSheep++;
}

/**
 * Remove a sheep from the sheepfold, RIP
 */
function pop() {
    nbSheep--;
}

/**
 * Get the current number of sheep in the fold
 */
function get() {
    return nbSheep;
}