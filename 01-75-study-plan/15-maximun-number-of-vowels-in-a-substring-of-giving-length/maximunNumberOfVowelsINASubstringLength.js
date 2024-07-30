// maximun Number Of Vowels In A Substring Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length


// Steps

// TODO dado un string "s" y un entero "k", retornar el maximo numero de letras vocales en cualquier substring de "s" con la longitud "k".

const maxVowels = (s, k) => {
    // Time complexity O(n)
    // Space complexity O(1)
    const vowels = "aeiou";
    const n = s.length;
    let start = 0;
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {

        if (vowels.includes(s[i])) {
            sum += 1;
        }

        if (i - start + 1 === k) {
            maxSum = Math.max(sum, maxSum);
            if (vowels.includes(s[start])) {
                sum--;
            }
            start++;
        }
    }

    return maxSum;
};

maxVowels("abciiidef", 3);