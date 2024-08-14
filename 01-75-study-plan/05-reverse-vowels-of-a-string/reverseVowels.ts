// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



function reverseVowels(s: string) {
    let start: number = 0;
    const [...arr]: string = s;
    let last: number = s.length - 1;
    const vowels: string = "aeiouAEIOU";


    while (start < last) {

        if (!vowels.includes(arr[start])) start++;
        if (!vowels.includes(arr[last])) last--;
        if (vowels.includes(arr[start]) && vowels.includes(arr[last])) {
            let temp = arr[start];
            arr[start] = arr[last];
            arr[last] = temp;
            start++;
            last--;
        }
    }

    return arr.join("");
};


reverseVowels("hello") //Expected Ouput: holle