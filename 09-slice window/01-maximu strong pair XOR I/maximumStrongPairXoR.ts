// You are given a 0-indexed integer array nums. A pair of integers x and y is called a strong pair if it satisfies the condition:

// |x - y| <= min(x, y)

// You need to select two integers from nums such that they form a strong pair and their bitwise XOR is the maximum among all strong pairs in the array.

// Return the maximum XOR value out of all possible strong pairs in the array nums.

// Note that you can pick the same integer twice to form a pair.

// TODO Steps

// 1. eres dado con un array de enteros con indices 0 "nums", un par de enteros "x" & "y" es llamado un par fuerte si satisface esta condicion

// 2. |x - y| <= min(x, y)

// 3. necesito seleccionar dos enteros de "nums" tal que ellos formen a par fuerte y su XOR bit a bit sea el máximo entre todos los pares fuertes en la matriz.

// 4. retorna el valor maximo valor XOR de todas los pares fuertes en el array "nums".

// 5. ypuedes tomar el mismo entero dos veces para formar un par fuerte

const maximumStrongPairXoR = (nums: number[]) => {
    let xor = 0;

    const map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }


};



maximumStrongPairXoR([1, 2, 3, 4, 5]);