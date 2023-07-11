const { kidsWithCandies } = require("./kidsWithTheGreatestNumberOfCandies");

describe("kidsWithCandies function", () => {
  it("Should return an array of bolean if the input number is the highest in the array when adding extra numbers", () => {
    const result = kidsWithCandies([10, 8, 5, 1, 3], 3);
    expect(result).toEqual([true, true, false, false, false]);
  });
  it("Should return `NOT_ALLOWED` if one element is bigger than 100", () => {
    const result = kidsWithCandies([101, 8, 5, 1, 3], 3);
    expect(result).toEqual("One or more inputs are not allowed");
  });
  it("Should return `NOT_ALLOWED` if one element is smaller than 1", () => {
    const result = kidsWithCandies([0, 8, 5, 1, 3], 3);
    expect(result).toEqual("One or more inputs are not allowed");
  });
  it("Should return `NOT_ALLOWED` if length of array is bigger than 100", () => {
    let length101 = new Array(101);
    const result = kidsWithCandies(length101, 3);
    expect(result).toEqual("One or more inputs are not allowed");
  });
  it("Should return `NOT_ALLOWED` if extra candies is bigger than 50", () => {
    let length101 = new Array(101);
    const result = kidsWithCandies([10, 8, 5, 1, 3], 51);
    expect(result).toEqual("One or more inputs are not allowed");
  });
  it("Should return `NOT_ALLOWED` if extra candies is smaller than 1", () => {
    let length101 = new Array(101);
    const result = kidsWithCandies([10, 8, 5, 1, 3], 0);
    expect(result).toEqual("One or more inputs are not allowed");
  });
});
