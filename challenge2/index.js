function manufacture(gifts, materials) {
  gifts.forEach((element) => {
    let flag = [...element].every((char) => materials.includes(char));
    if (flag)
      console.log(
        `${element}${" si, porque sus letras estan en "}${materials}`
      );
    else
      console.log(
        `${element}${" no, porque sus letras no estan en "}${materials}`
      );
  });
}

// const gifts = ["tren", "oso", "pelota"];
// const materials = "tronesa";

// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ["juego", "puzzle"];
// const materials = "jlepuz";

// manufacture(gifts, materials); // ["puzzle"]

const gifts = ["libro", "ps5"];
const materials = "psli";

// manufacture(gifts, materials); // []
manufacture(gifts, materials); // ["tren", "oso"])
