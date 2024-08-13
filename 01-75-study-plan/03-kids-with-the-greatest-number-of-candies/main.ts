function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxValue: number = Math.max(...candies);
    const result: boolean[] = candies.map((candy) => candy + extraCandies >= maxValue ? true : false);
    return result
};



console.log(kidsWithCandies([2, 3, 4, 5, 7, 5], 9));
