// Is the most efficient algorithm because the time to complete the algorithm dont change with the input size, is always the same as the time to complete the algorithm.


// Examples


const nums = [1, 2, 3];
nums.push(4) // push to the end of the array
nums.pop(); // remove the last element of the array

// acces a certain value

nums[0]; // 1
nums[1]; // 2
nums[2]; // 3


// HasMap / set

const hashMap = {};
hashMap["key"] = 10; //Insert
console.log("key" in hashMap); //Look up
console.log(hashMap.key); //Look Up;
delete hashMap.key //Delete element;
console.log(hashMap.key); //Return Undefined