// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// Steps

// TODO dado un string "jewels" represetando el tipo de piedras que son joyas, y "stones" represetando las piedras que tengo. cada caracter en "stone" es un tipo de piedra que tengo, quieres saber cuantas de las piedras que tienes tambien son joyas

// TODO las letras son sensibles entre minusculas y mayusculas, entonces "a" es considerado un tipo diferente de piedra que "A"

const numJewelsInStones = (jewels, stones) => {

    const map = new Map();
    let count = 0;
    jewels.split("").forEach(char => map.set(char, 1))

    for (let i = 0; i < stones.length; i++) {

        if (map.has(stones[i])) {
            count++
        }
    }

    return count;
};


numJewelsInStones("aA", "aAAbbbb");