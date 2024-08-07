// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.


const targetIndices = (nums: number[], target: number): number[] => {

    nums.sort(((a: number, b: number) => a - b));
    const newArr: number[] = [];
    const n = nums.length;
    let i = 0;

    while (i < n) {

        if (nums[i] === target) {

            newArr.push(i)
        }
        i++
    }

    return newArr;
}


console.log(targetIndices([1, 2, 5, 2, 3], 2));