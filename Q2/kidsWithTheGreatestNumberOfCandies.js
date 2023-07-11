/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const exampleCandies = [10, 8, 5, 1, 3];
const exampleExtraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  const numRange = candies.findIndex((e) => e < 1 || e > 100);
  if (
    numRange != -1 ||
    candies.length < 2 ||
    candies.length > 100 ||
    extraCandies < 1 ||
    extraCandies > 50
  ) {
    return (result = "One or more inputs are not allowed");
  } else {
    candies.map((num) => {
      const maxAmount = Math.max(...candies);
      const addedCandies = num + extraCandies;
      if (addedCandies >= maxAmount) result.push(true);
      else result.push(false);
    });
  }
  return result;
};
console.log(kidsWithCandies(exampleCandies, exampleExtraCandies));

module.exports = { kidsWithCandies };
