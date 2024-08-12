// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// STeps

const gcdOfStrings = (str1: string, str2: string): string => {

    return str1 + str2 === str2 + str1 ? str1.substring(0, euclidAlgorithm(str1.length, str2.length)) : ""
}

const euclidAlgorithm = (number1: number, number2: number): number => {
    let gcd: number = 0;

    if (number1 === number2) {
        gcd = number1;
    } else if (number1 > number2) {
        gcd = euclidAlgorithm((number1 - number2), number2);
    } else if (number1 < number2) {
        gcd = euclidAlgorithm(number1, (number2 - number1));
    }

    return gcd;
}

console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "ABAB"
console.log(gcdOfStrings("LEETCODE", "CODE")); // Output: ""
