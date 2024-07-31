// Linear Grow scenario as our input size grows, the time grows proportional.
// when we talk about o(n) we are reference to te worst case runtime

const nums = [1, 2, 3];


// Looping an array

for (let int of nums) {
    console.log(int);
}

nums.splice(3, 0, 4)

// Sometimes even nested loops can be O(n)
// (e.g monotonic stack or sliding window)