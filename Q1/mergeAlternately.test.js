const { lowerAndReplace, mergeAlternately } = require("./mergeAlternately");

describe("toLowerCase and Replace Function", () => {
  it("should output lowercase", () => {
    const string = lowerAndReplace("aBc", "Qpr");
    expect(string.word1).toBe("abc");
    expect(string.word2).toBe("qpr");
  });
  it("should not output special character", () => {
    const string = lowerAndReplace("a!c", "*pr");
    expect(string.word1).toBe("ac");
    expect(string.word2).toBe("pr");
  });
  it("should not output numbers", () => {
    const string = lowerAndReplace("ab1", "qpr");
    expect(string.word1).toBe("ab");
    expect(string.word2).toBe("qpr");
  });

  it("should not output numbers, special chars and should output lowercase only", () => {
    const string = lowerAndReplace("AB1", "Qpr@");
    expect(string.word1).toBe("ab");
    expect(string.word2).toBe("qpr");
  });
});

describe("Merge two strings alternately Function", () => {
  it("should merge two strings alternately", () => {
    const string = mergeAlternately("abc", "qpr");
    expect(string).toBe("aqbpcr");
  });
  it("should output longer second string at end of the merged string", () => {
    const string = mergeAlternately("abc", "qprwfg");
    expect(string).toBe("aqbpcrwfg");
  });

  it("should output longer first string at end of the merged string", () => {
    const string = mergeAlternately("abcfgh", "qpr");
    expect(string).toBe("aqbpcrfgh");
  });

  it("should not output anything if both strings length is smaller than 1", () => {
    const string = mergeAlternately("", "");
    expect(string).toBe(undefined);
  });
  it("should not output anything if first string length is smaller than 1", () => {
    const string = mergeAlternately("", "qpr");
    expect(string).toBe(undefined);
  });

  it("should not output anything if second string length is smaller than 1", () => {
    const string = mergeAlternately("abc", "");
    expect(string).toBe(undefined);
  });
  it("should not output anything if first string length is bigger than 100", () => {
    let length101 = "a".repeat(101);
    const string = mergeAlternately(length101, "qpr");
    expect(string).toBe(undefined);
  });
  it("should not output anything if second string length is bigger than 100", () => {
    let length101 = "a".repeat(101);
    const string = mergeAlternately("abc", length101);
    expect(string).toBe(undefined);
  });
  it("should not output anything if both strings length is bigger than 100", () => {
    let length101 = "a".repeat(101);
    const string = mergeAlternately(length101, length101);
    expect(string).toBe(undefined);
  });
});
