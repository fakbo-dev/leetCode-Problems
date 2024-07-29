// Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


// TODO steps

// TODO se te da un array de numeros enteros que consiste en "n" elementos, y un entero "k"
// TODO Encuentre un subconjunto contiguo cuya longitud sea igual a "k" que tenga el valor promedio máximo y devuelva este valor. Se aceptará cualquier respuesta con un error de cálculo menor a 10-5.

const findMaxAverage = (nums, k) => {

    // Time complexity:O(n)
    // Space Complexity: O(1)

    let start = 0;
    let sum = 0;
    let maxSum = -Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];
        if (i - start + 1 === k) {
            maxSum = Math.max(maxSum, sum);
            sum -= nums[start]
            start++;
        }
    }
    let result = maxSum / k;

    return result.toFixed(5);
}


console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //Expected Ouput: 12.75000
console.log(findMaxAverage([-1], 1)); //Expected Ouput: -1.0000

