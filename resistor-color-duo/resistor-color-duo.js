
export const value = colorList => {
  const numbersList = colorList.map(color =>
    [
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white"
    ].indexOf(color)
  );

  return numbersList && parseInt(numbersList.join(""));
};
