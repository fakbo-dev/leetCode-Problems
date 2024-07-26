// ! containerWIthMostWater

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// Steps

//? 1. se le proporciona un array "height" de numeros enteros de longitud "n". se dibujan lineas verticales de modo que los dos puntos finales de e; "ith" line sean (i, 0) y (i,height[i]).

//? 2. encuentra dos lineas que juntas en el eje x formen un contenedor, de modo que el container contenga la mayor cantidad de agua.
// ? 3. retornar la maxima cantidad de agua que el contenedor puede almacenar.
// ? 4. tenga el cuenta no que no puede inclinar el contenedor.



// const maxArea = (height) => {
//     let n = height.length;
//     let i = 0;
//     let j = n - 1;
//     let startPointer = 0;
//     let endPointer = 0;
//     let count = 0
//     let result = 0
//     while (i < j) {

//         if (height[i] > startPointer) {
//             startPointer = height[i]

//         }

//         if (endPointer < height[j] && startPointer > endPointer) {
//             endPointer = height[j];
//             j--;
//         }
//         i++;
//     }

//     count = height.lastIndexOf(endPointer) - height.indexOf(startPointer);
//     result = count * endPointer;
//     console.log(result);
//     return result;
// }


// // maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // Ouput: 49
// // maxArea([4, 3, 2, 1, 4]); // Ouput: 16
// maxArea([1, 2]); // Ouput: 1


const maxArea = (height) => {
    // inicializar variables
    let startPointer = 0; //Primer pointer inicia al principio del array
    let endPointer = height.length - 1; // segundo pointer inicia en el ultimo valor del array
    let maxArea = 0; //mantener seguimiento de las areas encontradas


    while (startPointer < endPointer) {
        // Calcular el area actual
        let minValue = Math.min(height[startPointer], height[endPointer]);
        let currentArea = minValue * (endPointer - startPointer);
        // actualizar el area maxima
        maxArea = Math.max(currentArea, maxArea);

        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        if (height[startPointer] < height[endPointer]) {
            startPointer++
        } else {
            endPointer--;
        }
    }
    console.log(maxArea);
    return maxArea;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // Ouput: 49
// maxArea([4, 3, 2, 1, 4]); // Ouput: 16
// maxArea([1, 2]); // Ouput: 1