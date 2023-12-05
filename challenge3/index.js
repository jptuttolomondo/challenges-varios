function findNaughtyStep(original, modified) {
  // Code here
  if (modified.length - original.length > 0)
    if (modified.length - original.length > 0) {
      for (let i = 0; i < modified.length; i++) {
        if (original[i] !== modified[i]) return modified[i];
      }
    }
  if (modified.length - original.length < 0) {
    for (let i = 0; i < modified.length; i++) {
      if (original[i] !== modified[i]) return original[i];
    }
  } else return "";
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'
