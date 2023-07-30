/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  const length = flowerbed.length;
  if (length < 1 || length > 20000 || n < 0 || n > length)
    return "Some inputs are invalid!";
  for (let i = 0; i < length; i++) {
    if (flowerbed[i] === 0) {
      const emptyLeft = i === 0 || flowerbed[i - 1] === 0 ? true : false;
      const emptyRight =
        i === length - 1 || flowerbed[i + 1] === 0 ? true : false;

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) return true;
      }
    } else if (flowerbed[i] != 1)
      return "Flowerbed inputs must be equal to 0 or 1.";
  }
  return count >= n;
};

const flowerbed = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
const n = 2;
console.log(canPlaceFlowers(flowerbed, n));

module.exports = { canPlaceFlowers };
