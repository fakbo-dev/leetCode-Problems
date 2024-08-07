function isPalindrome(x: number): boolean {
    let result = "";

    for (let i = x.toString().length - 1; i >= 0; i--) {
        result += x.toString()[i]
    }

    return Number(result) === x;
};

console.log(isPalindrome(121));