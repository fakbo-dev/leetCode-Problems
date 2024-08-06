// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// TODO steps

// Dada una permutación basada en cero "nums" (indexada en 0), construya una matriz ans de la misma longitud donde ans[i] = nums[nums[i]] para cada 0 <= i < nums.length y devuélvala.

// Una permutación basada en cero nums es una matriz de números enteros distintos desde 0 hasta nums.length - 1 (inclusive).
const buildArray = (nums: number[]): number[] => {

    const ans: number[] = nums.map(int => nums[int]);
    return ans;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));