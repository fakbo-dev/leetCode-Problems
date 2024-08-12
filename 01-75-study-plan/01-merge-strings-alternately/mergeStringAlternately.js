// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.


// Steps

// Two strings "word1", "word2"
// Merge the strings by adding a letters in alternating order.
// start with the word1.
// if one string is longaer than the other add the rest to the end of merge.

const mergeAlternately = (word1, word2) => {
    const n = Math.max(word1.length, word2.length);
    let result = "";

    for (let i = 0; i < n; i++) {

        if (i < word1.length) {
            result += `${word1[i]}`
        }
        if (i < word2.length) {
            result += `${word2[i]}`
        }
    }

    return result;
}


const test1 = "abc";
const test2 = "pqr";

const result1 = mergeAlternately(test1, test2); //Expected Ouput = apbqcr;




















// const mergeAlternately = (word1, word2) => {
//     // Create the merge array
//     const merge = [];
//     // transform the string in to a array
//     const [...arr1] = word1;
//     const [...arr2] = word2;

//     // Take the max length
//     const maxLength = Math.max(arr1.length, arr2.length);
//     // loop through the array

//     for (let i = 0; i < maxLength; i++) {

//         if (i < arr1.length) {
//             merge.push(arr1[i]);
//         }

//         if (i < arr2.length) {
//             merge.push(arr2[i]);
//         }
//     }

//     return merge.join("");
// }
