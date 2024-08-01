// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string

//steps

// 1.dado un string indexado en 0 "word" y un caracter "ch", revierta el segmento de la palabra que empieza en el indice 0 y termine en el indice de la primera ocurrencia de ch (inclusiva). si el caracter "ch" no existe en word, no hagas nada


const reversePrefix = (word, ch) => {
    if (!word.includes(ch)) return word;

    const [...subArr] = word.substring(0, (word.indexOf(ch) + 1));
    let reverseString = "";
    for (let i = subArr.length - 1; i >= 0; i--) {
        reverseString += `${subArr[i]}`;
    }
    const result = reverseString + word.slice(word.indexOf(ch) + 1);
    return result;
}


reversePrefix("abcdefd", "d");

