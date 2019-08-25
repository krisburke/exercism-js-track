export const toRna = strand => {
  const complements = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  return strand
    .split("")
    .map(letter => complements[letter])
    .join("");
};
