const canPlaceFlowers = require("./canPlaceFlowers");

describe("canPlaceFlowers Functions", () => {
  it("Should return a boolean saying if amount of flower (n) can be planted", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBe(true);
  });
});
