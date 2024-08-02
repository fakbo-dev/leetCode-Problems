// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.


// Steps

// 1. se te da dos strings "s" y "t" de tal manera que cada caracter ocurre al menos una vez en "s", y "t" es una permutacion de "s"

// 2. la diferencia de permutacion entre "s" y "t" es definida por la suma absoluta entre el indeces de la ocurrencia de cada caracter en "s" y el indice de ocurrencia de cada caraacter en "t"

// 3. retorna la diferencia de permutacion entre "s" y "t".

const findPermutationDifference = (s, t) => {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < s.length; i++) {

        map.set(s[i], i);
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            count += Math.abs(map.get(t[i]) - i);
        }
    }

    console.log(count);

}


findPermutationDifference("abc", "bac") //Expected Ouput = 2
// findPermutationDifference("abcde", "edbac") //Expected Ouput = 2


// for (let i = 0; i < s.length; i++) {

//     for (let j = 0; j < s.length; j++) {
//         if (s[i] === t[j]) {
//             count += Math.abs(i - j);
//         }
//     }
// }
