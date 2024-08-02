// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.



const numIdenticalPairs = (nums) => {
    const numsMap = new Map();
    let count = 0;
    for (let int of nums) {

        if (numsMap.has(int)) {
            count += numsMap.get(int);
            numsMap.set(int, numsMap.get(int) + 1);
        } else {
            numsMap.set(int, 1);
        }
    }
    console.log(count);
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]);