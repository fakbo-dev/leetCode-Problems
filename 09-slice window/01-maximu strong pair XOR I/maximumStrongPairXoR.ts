// You are given a 0-indexed integer array nums. A pair of integers x and y is called a strong pair if it satisfies the condition:

// |x - y| <= min(x, y)

// You need to select two integers from nums such that they form a strong pair and their bitwise XOR is the maximum among all strong pairs in the array.

// Return the maximum XOR value out of all possible strong pairs in the array nums.

// Note that you can pick the same integer twice to form a pair.

// TODO Steps

// 1. eres dado con un array de enteros con indices 0 "nums", un par de enteros "x" & "y" es llamado un par fuerte si satisface esta condicion

// 2. |x - y| <= min(x, y)

// 3. debe seleccionar dos enteros de "nums" tal que ellos formen a par fuerte y su XOR bit a bit sea el máximo entre todos los pares fuertes en la matriz.

// 4. retorna el valor maximo valor XOR de todas los pares fuertes en el array "nums".

// 5. ypuedes tomar el mismo entero dos veces para formar un par fuerte

const maximumStrongPairXor = (nums: number[]): number => {
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    let XoR: number = 0;
    let windowStart: number = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        while (nums[windowEnd] - nums[windowStart] > nums[windowStart]) {
            windowStart++;
        }

        for (let i = windowStart; i < windowEnd; i++) {
            XoR = Math.max(XoR, nums[i] ^ nums[windowEnd]);
        }
    }

    return XoR;
};


maximumStrongPairXor([1, 2, 3, 4, 5]);



// ? Brute Force

// const maximumStrongPairXor = (nums: number[]) => {
//     let XoR: number = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let temp = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
//                 temp = nums[i] ^ nums[j];

//                 XoR = Math.max(XoR, temp);
//             }
//         }
//     }
//     return XoR
// };
