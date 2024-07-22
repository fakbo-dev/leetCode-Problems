// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.


// 1. Dada una matriz de números enteros, devuelve verdadero si existe un triple de índices (i, j, k) tal que i < j < k y nums[i] < nums[j] < nums[k]. Si no existen tales índices, devuelve falso.


const nums = [1, 2, 3, 4, 5];
const test2 = [5, 4, 3, 2, 1];
const test3 = [1, 2, 1, 3];
const test4 = [20, 100, 10, 12, 5, 13];
// O(n);

const increasingTriplet = (nums) => {
    const n = nums.length;
    let result = false;
    let x = Number.MAX_SAFE_INTEGER;
    let y = Number.MAX_SAFE_INTEGER;
    let i = 0;

    while (i < n) {

        if (nums[i] <= x) {
            x = nums[i];
        } else if (nums[i] > x && nums[i] <= y) {
            y = nums[i];
        } else if (nums[i] > x && nums[i] > y) {
            result = true;
        }
        i++
    }

    return result;
}

console.log(increasingTriplet(nums));
console.log(increasingTriplet(test2));
console.log(increasingTriplet(test3));
console.log(increasingTriplet(test4));
