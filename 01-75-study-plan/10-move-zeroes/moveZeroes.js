// Move Zeroes.

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


const nums = [0, 1, 0, 3, 12];

const moveZeroes = (nums) => {
    // Two Pointers
    // O(n^2)
    const n = nums.length;

    if (n === 1) {
        console.log(nums);
    }
    for (let i = n - 1; i > 0; i--) {



        for (let j = 0; j < n - 1; j++) {
            if (nums[j] === 0) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }

        }
    }
};



moveZeroes(nums);