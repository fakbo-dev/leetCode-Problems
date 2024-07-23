// String Compression

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Steps

// TODO HINT two Pointers String
// ?1.dado un array de caracteres "chars", comprimelos usando el siguiente algoritmo.

// ?2. Comience con un string vacio "s". Para cada grupo de caracteres repetidos consecutivos en caracteres:
//TODO 2.1 crea un string variable


// ?3. si el la longitud del grupo es 1, adjunta el caracter a "s"

// ?4. de lo contrario, adjunta el caracter seguido de la longitud de su grupo.

// ?5. en el string comprimido "s" no debe devolverse separado, en cambio, debe ser almacenado en el array de entrada de caracteres. nota que los grupos con una longitud mayor a 10 debe ser separados en multiples caracteres

// ?6. luego de modificar todo el array de entrada, devuelve la nueva longitud del array.

// ?7. debe escribir un algoritmo que use solo use espacio 



// const compress = (chars) => {
//     // 1. crear un string s para almacenar los grupos de caracteres repetidos consecutivos en nuestro array char
//     let s = "";
//     // group es un pointer para almacenar cuantas veces se repite un caracter en nuestro array.
//     let group = 1;
//     let j = 0;
//     const n = chars.length;

//     for (let i = 0; i < n; i++) {
//         let next = chars[i + 1];

//         if (chars[i] === next) {
//             group++;
//         } else {
//             if (group <= 1) {
//                 s += chars[i];
//             } else if (group > 1 && next !== n - 1) {
//                 s += `${chars[i]}${group}`;
//             }
//             group = 1;
//         }
//     }
//     chars = s.split("");
//     console.log(chars);
//     return chars.length;
// }


const compress = (chars) => {
    // Two pointers
    // O(n) -> n = length of the input array
    let i = 0;
    let j = 0;
    let n = chars.length;

    while (i < n) {
        let group = 0;
        let current = chars[i];

        while (i < n && chars[i] === current) {
            i++;
            group++;
        }

        chars[j++] = current;

        if (group > 1) {

            for (num of group.toString()) {
                chars[j++] = num;
            }
        }
    }
    return j;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])) //Expected Ouput -> 6 -> "a2b2c3"


