// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

// TODO Steps

// TODO se te da un array de numeros enteros "nums" y un numero entero "k".

// TODO en una operacion, puedes tomar dos numeros del array que su suma sea igual a "k" y remuevelos del array

// TODO retorna el numero maximo de numbers de operaciones que puedes realizar en el array



const maxOperations = (nums, k) => {
    let operations = 0;
    let l = 0;
    const numsSorted = nums.sort((a, b) => a - b);
    let r = numsSorted.length - 1;

    while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum === k) {
            operations++;
            l++;
            r--;
        } else if (sum < k) {
            l++
        } else if (sum > k) {
            r--;
        }
    }
    return operations;
};

maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3);
// maxOperacions([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2);
