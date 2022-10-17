const moveValues = [11, 35, 41];
const low = 1;
const high = 99;
function isValid(array) {
    for (let num of array) {
        if (num >= low && num <= high) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
console.log(isValid(moveValues));
