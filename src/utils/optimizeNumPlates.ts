interface Plates {
  [key: number]: number;
}

export const optimizeNumPlates = (
  n: number,
  platesAvailable = [2.5, 5, 10, 25, 35, 45],
  barWeight = 45
) => {
  const plates: Plates = {};

  let targetWeight = (n - barWeight) / 2;
  const reversedPlates = [...platesAvailable].reverse();

  while (targetWeight > 0 && targetWeight - platesAvailable[0] >= 0) {
    reversedPlates.some(plate => {
      let good = false;
      if (targetWeight - plate >= 0) {
        targetWeight -= plate;
        if (plate in plates) {
          plates[plate] += 1;
        } else {
          plates[plate] = 1;
        }
        good = true;
      }
      return good;
    });
  }

  return plates;
};
