// Is Subsequence


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Steps

//? 1. dados dos strings "s" y "t", devuelve "true" si s es una subsequencia de t, de otro modo devuelve "false".

//?  2. una subsecuencia de un string es un nuevo string formado desde el string original eliminando algunos (puede no ser ninguno) de los caracteres sin pertubar la posicion relativa de los caracteres restantes. (i.e, "ace" es una subsequencia de "abcde" mientras "aec" no lo es).



const isSubsequence = (s, t) => {

    // Time complexity O(n)
    // memory complexity O(1)
    const [...leftString] = s;
    const [...rightString] = t;
    const n = rightString.length;
    const newArr = [];
    let p1 = 0;
    let p2 = 0;

    while (p1 < n) {

        if (p1 < n && rightString[p1] === leftString[p2]) {
            newArr.push(rightString[p1]);
            p2++
        }

        p1++

    }
    const result = newArr.join("");
    return result === s;
}

console.log(isSubsequence("abc", "ahbgdc")); // Ouput:  True



