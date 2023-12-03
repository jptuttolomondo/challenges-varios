function manufacture(gifts, materials) {
  let response = [];
  gifts.forEach((element) => {
    let flag = [...element].every((char) => materials.includes(char));
    if (flag) response.push(element);
    else
      return `${element}${" no, porque sus letras no estan en "}${materials}`;
  });
  return response;
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
