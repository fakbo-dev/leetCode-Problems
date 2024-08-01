// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:

// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

// Steps

// 1. se te da un array de numeros de coma flotante "average" que se inicializa vacio. se te da un array de "nums" de "n" enteros donde "n" es par.

// 2. repites el siguiente procedimiento n / 2 veces:

// 3. remueve el elemento mas pequeno, "minElement", y el elemento mas largo "maxElement", de "nums".
// 4. agrega (minElement + maxElement) / 2 al los promedios.
// 5. retorna el valor minumo de promedios

const minimumAverage = (nums) => {
    const average = [];
    const n = nums.length;
    const sortNum = nums.sort((a, b) => a - b);

    let minElement = 0;
    let maxElement = n - 1;


    while (minElement < maxElement) {
        average.push((sortNum[minElement] + sortNum[maxElement]) / 2);
        minElement++;
        maxElement--;
    }

    const result = Math.min(...average);
    return result;
}


minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]) //Expected Ouput = 5.5;