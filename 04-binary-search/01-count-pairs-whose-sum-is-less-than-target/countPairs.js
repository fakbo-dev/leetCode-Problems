// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

// Steps

// 1. Dada una matriz de enteros indexada en 0 nums de longitud "n" y un numero entero como objetivo, devuelva el numero de pares (i,j) donde 0 <= i < j < n y  nums[i] + nums[j] < target


const countPairs = (nums, target) => {
    let count = 0;
    const sortNums = nums.sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {

        let sum = sortNums[i] + sortNums[j];

        if (sum < target) {
            count += j - i
            i++
        } else {
            j--;
        }
    }
    return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)) //Expected Ouput = 3;
// countPairs([-6, 2, 5, -2, -7, -1, 3], -2) //Expected Ouput = 10;
