// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Steps ---------------------

// 1. dado un string de entrada "s", invierte el orden de las palabras
// 2. una palabra es definida como una secuencia de caracteres sin espacios. las palabras en "s" seran separadas por al menos un espacio.
// 3. retorna un string con las palabras invertidas concatenadas con un unico espacio
// 4. nota que "s" puede contener al principio o seguidos espacios entre dos palabras. el string devuelto debera solo tener un espacio separando las palabras. no debes incluir expacios extra.


// Tal vez usar pointers?
const reversedWords = (s) => {

    // O(n)
    const string = s.trim();
    let words = string.split(" ");
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {


        if (i !== 0 || words[i] !== " ") {
            result += `${words[i]} `;
        } else {
            result += `${words[i]}`
        }

    }
    return result;
};

// reversedWords("the sky is blue"); //Expected Ouput = blue is sky the
reversedWords("a good   example"); //Expected Ouput = blue is sky the

