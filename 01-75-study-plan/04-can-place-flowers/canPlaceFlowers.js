// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// 1. Tienes un macizo de flores largo en el que algunas parcelas están plantadas y otras no. Sin embargo, no se pueden plantar flores en parcelas adyacentes.
// 2.Dado un macizo de flores de matriz entera que contiene ceros y unos, donde 0 significa vacío y 1 significa no vacío, y un número entero n, devuelve verdadero si se pueden plantar n nuevas flores en el macizo de flores sin violar la regla de no flores adyacentes y falso de lo contrario.

const canPlaceFlowers = (flowerbed, n) => {

    for (let i = 0; i < flowerbed.length; i++) {
        const lastElement = flowerbed.length - 1;
        if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        } else if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        } else if (i === lastElement && flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0)) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Expected Output = true;
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); // Expected Output = true;
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // Expected Output = true;
console.log(canPlaceFlowers([0], 1)); // Expected Output = true;
console.log(canPlaceFlowers([1], 1)); // Expected Output = false;