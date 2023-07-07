const lowerAndReplace = (word1, word2) => {
  word1 = word1.toLowerCase().replace(/[^a-z]/g, "");
  word2 = word2.toLowerCase().replace(/[^a-z]/g, "");

  return { word1, word2 };
};

const mergeAlternately = function (one, two) {
  if (one.length < 1 || one.length > 100 || two.length < 1 || two.length > 100)
    return;
  const adjustedWords = lowerAndReplace(one, two);
  const { word1, word2 } = adjustedWords;
  let result = "";

  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};

console.log(mergeAlternately("abc", "qpr"));

module.exports = { mergeAlternately, lowerAndReplace };
