// Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// 1. dado un string "s", revertir solo todas las vocales en el string y devolverlo.
// 2. las vocales son a e i o u y pueden aparecer en minuscula y mayuscula, mas de una vez.

const reverseVowels = function (s) {
    // 1. O(n)
    // Transformar el string en un array
    const [...stringArr] = s;
    // Crear dos pointer uno que inicie en el principio del array y uno que apunte al final del array
    // inicio
    let startPointer = 0;
    // final
    let endPointer = stringArr.length - 1;
    // una variable que tenga todas las vocales en miniscula y mayuscula
    const vowels = "aeiouAEIOU";


    // Iterar a travez del array para determinar que valores son vocales
    while (startPointer < endPointer) {
        // Mover el startPointer hasta que se consiga una vocal
        while (startPointer < endPointer && vowels.indexOf(stringArr[startPointer]) === -1) {
            startPointer++
        }
        // Mover el endPointer hasta que consiga una vocal
        while (startPointer < endPointer && vowels.indexOf(stringArr[endPointer]) === -1) {
            endPointer--;
        }
        // Guardar el valor temporal de starPointer
        let temp = stringArr[startPointer];
        // Cambiar valores
        stringArr[startPointer] = stringArr[endPointer];
        stringArr[endPointer] = temp;

        // Continuar nuestro loop
        startPointer++;
        endPointer--;
    }
    const result = stringArr.join("");
    return result;
};


// console.log(reverseVowels("hello")); //expected Ouput : "holle"
console.log(reverseVowels("leetcode")); //expected Ouput : "leotcede"


// const [...stringArr] = s;
// let tempIndex = 0;
// let currentIndex = 0;
// let temp = "";
// let current = "";

// for (let i = 0; i < stringArr.length; i++) {
//     if (
//         stringArr[i] === "a" || stringArr[i] === "e" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u" ||
//         stringArr[i] === "A" || stringArr[i] === "E" || stringArr[i] === "I" || stringArr[i] === "O" || stringArr[i] === "U"
//     ) {
//         temp = current;
//         tempIndex = currentIndex;
//         current = stringArr[i];
//         currentIndex = i;
//     }
//     if (tempIndex !== 0 && currentIndex !== 0) {
//         stringArr[tempIndex] = current;
//         stringArr[currentIndex] = temp;
//     }
// }
// const result = stringArr.join("");
// return result;