const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = sentence => {
  const map = {};
  let isPangram = true;

  sentence
    .toLowerCase()
    .split("")
    .forEach(letter => {
      if (!map[letter]) {
        map[letter] = true;
      }
    });

  alphabet.split("").forEach(letter => {
    if (!map[letter]) {
      isPangram = false;
    }
  });

  return isPangram;
};
