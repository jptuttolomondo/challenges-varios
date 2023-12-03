//primer commit
//segundo commit
function findFirstRepeated(gifts) {
  let index = 0;
  for (let i = 0; i < gifts.length; i++)
    for (let k = i + 1; k < gifts.length; k++)
      if (gifts[i] === gifts[k] && (index > k || index === 0)) index = k;
  if (index === 0) return -1;
  return gifts[index];
}
const giftIds = [1, 2, 3, 4];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);
