// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.
const kidsWithCandies = (candies, extraCandies) => {

    // O(n)
    // candies = array of numbres
    // n ->  kids with candies = candies[i]
    let newArray = [];
    // Found the max Number in the array
    const max = candies.reduce((a, b) => Math.max(a, b), -Infinity);

    // Loop through the candies and check if the if the number is greater than the max number, if so, return true else return false.
    for (let i = 0; i < candies.length; i++) {
        let temp = candies[i] + extraCandies;
        if (temp >= max) {

            newArray.push(true);
        } else {
            newArray.push(false)
        }

    }
    return newArray;
};