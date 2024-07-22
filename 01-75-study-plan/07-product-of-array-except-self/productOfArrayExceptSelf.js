//  Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// steps

//  1. Dado un array de números enteros, devuelva una [answer array] tal que answer[i] sea igual al producto de todos los elementos de números excepto nums[i].

//  2. Se garantiza que el producto de cualquier prefijo o sufijo de números cabe en un entero de 32 bits.

//  3. Debes escribir un algoritmo que se ejecute en tiempo O(n) y sin utilizar la operación de división.

const nums = [1, 2, 3, 4];
function productExceptLeft(nums) {
    const n = nums.length;
    const answer = [];

    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    // Calculate the product of all elements to the left 
    //of each element
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Calculate the product of all elements to the right 
    //of each element
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
        console.log(answer[i]);
    }

    return answer;
}

console.log(productExceptLeft(nums));


// let answer = [...nums];
// let start = 0;
// let temp = start;
// let length = answer.length;

// while (start < length) {
//     console.log(temp, start);
//     start++;
// }

// console.log(answer);