// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// TODO Steps

// TODO 1. tienes una larga cama de flores in la cual algunos de las parcelas contienen ceros y unos, donde 0 significa vacio y uno significa no vacio, y un entero "n", retorna verdad si "n" flores nuevas pueden ser plantadas en la cama de flores sin violar la regla de no flores adyancetes de otro modo retorna falso

function canPlaceFlowers(flowerbed: number[], n: number) {
    let count: number = 0;

    for (let i = 0; i < flowerbed.length; i++) {

        if (count !== n) {
            if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] !== 1 && flowerbed[i + 2] !== 1) {
                flowerbed.splice(i, 1, 1);
                count++;
            }
            if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i - 2] !== 1) {
                flowerbed.splice(i, 1, 1);
                count++
            }
            if (flowerbed[i] === 0 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1) {
                flowerbed.splice(i, 1, 1);
                count++
            }
        }
    }
    return count === n;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 0]
    , 1));



// for (let i = 0; i < flowerbed.length; i++) {

//     if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] !== undefined && flowerbed[i + 1] !== undefined && flowerbed[i - 1] !== undefined) {
//         flowerbed.splice(i, 1, 1);
//         if (n !== 0) {
//             n--;
//         }
//     }
// }

// console.log(flowerbed);

// return n === 0 ? true : false;