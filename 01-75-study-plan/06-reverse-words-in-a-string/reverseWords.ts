// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


function reverseWords(s: string) {
    let fix = s.trim();
    const arrString: string[] = fix.split(" ");
    let result: string = "";

    for (let i = arrString.length - 1; i >= 0; i--) {
        if (arrString[i] === "") {
            continue;
        }
        result += arrString[i] + (i !== 0 ? " " : "");
    }

    return result;
};



reverseWords("a good   example");


// function reverseWords(s: string) {
//     let fix = s.trim();
//     const arrString: string[] = fix.split(" ");
//     let result: string = "";

//     for (let i = arrString.length - 1; i >= 0; i--) {
//         if (arrString[i] === "") {
//             continue;
//         }
//         result += arrString[i] + (i !== 0 ? " " : "");
//     }

//     console.log(result);
//     return result;
// };
