// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// TODO Steps

// 1. Se le proporciona una matriz de números enteros "nums" estrictamente crecientes con índice 0 y un entero positivo "diff". Un triplete (i, j, k) es un triplete aritmético si se cumplen las siguientes condiciones:

// 1. i < j < k,
// 2. nums[j] - nums[i] = diff and 
// 3. nums[k] - nums[j] = diff.
// Retorna el numero de triplete aritmetico

const arithmeticTriplets = (nums, diff) => {

    const numsMap = new Map();
    let triplet = 0;
    const n = nums.length;
    let i = 0;

    while (i < n) {
        numsMap.set(nums[i], true);
        i++
    }

    for (let i = 0; i < n; i++) {
        if (numsMap.has(nums[i] - diff) && numsMap.has(nums[i] + diff)) {

            triplet++;
        }
    }

    return triplet;

}


arithmeticTriplets([0, 1, 4, 6, 7, 10], 3);