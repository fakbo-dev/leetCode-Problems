// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// 1. para dos strings "s" y "t", decimos que t divide a s (t/s) si y solo si s = t + t + t (t esta concatenado consigo mismo una o mas veces).
// 2. dados dos strings str1 y str2, devuelve la cadena más grande x tal que x divide tanto str1 como str2.


const gcdOfStrings = function (str1, str2) {
    let result = "";
    const gcd = (s, t) => (t === 0 ? s : gcd(t, s % t));

    if (str2 + str1 === str1 + str2) {
        result = str1.substring(0, gcd(str1.length, str2.length));
        return result;
    }

    return result;
};


console.log(gcdOfStrings('ABCABC', 'ABC')); // Output: 'ABC'

console.log(gcdOfStrings('ABABAB', 'ABAB')); // Output: 'AB'

console.log(gcdOfStrings('LEETCODEISAwesome', 'LEETCODE')); // Output: 'LEETCODE'


// const gcd = str2 + str1;
// let newArray = [];
// for (let i = 0; i < gcd.length; i++) {

//     if (newArray.includes(gcd[i])) {
//         continue;
//     }
//     else {
//         newArray.push(gcd[i]);
//     }
// }
// const result = newArray.join("");
// return gcd === str1 + str2 ? result : "";