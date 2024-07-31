// When you have nested loops the simplest case if is you have nested arrays and you have to iterate over that array also if you hace a single array and you want to iterate through it in time.

// Transverse a square grid
const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j < nums[i].length; j++) {
        console.log(i, nums[i][j]);
    }
}

// Get every pair of elements in the array
const nums2 = [1, 2, 3, 4, 5];
for (let i = 0; i < nums2.length; i++) {

    for (let j = i + 1; j < nums2.length; j++) {
        console.log(nums2[i], nums2[j]);
    }
}

// Insertion sort
// (Insert in middle n times -> n^2)