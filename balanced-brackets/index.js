function isBalanced(s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  let arrayS = s.split("");
  let result = true;

  while (result === true && arrayS.length > 0) {
    const closingIndex = arrayS.findIndex((char) =>
      ["}", "]", ")"].includes(char)
    );

    // avoid not found values (-1) and closing brackets at start of char (0)
    if (closingIndex > 0) {
      const closingValue = arrayS[closingIndex];
      const openingValue = arrayS[closingIndex - 1];
      const expectedOpeningVale = {
        "}": "{",
        "]": "[",
        ")": "(",
      }[closingValue];

      if (openingValue !== expectedOpeningVale) {
        result = false;
      } else {
        arrayS = arrayS.filter(
          (_val, i) => ![closingIndex, closingIndex - 1].includes(i)
        );
      }
    } else {
      result = false;
    }
  }

  return result;
}

exports.isBalanced = isBalanced;
