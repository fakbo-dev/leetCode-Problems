// Stacks


// functions: push, pop, peek, length.

// Palindrome


const word = "racecar";

function isPalindrome(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord === word ? true : false;
}




// console.log(isPalindrome(word));
// console.log(isPalindrome("hello"));


class Stack {

    constructor() {
        this.store = {};
        this.length = 0;
    }


    push(value) {
        this.store[this.length] = value;
        this.length++;
    }

    pop() {

        if (this.length === 0) return null;

        const result = this.store[this.length];
        delete this.store[this.length];
        this.length--;
        return result;
    }

    peek() {
        return this.store[this.length - 1];
    }
    size() {
        return this.length;
    }
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.peek());
