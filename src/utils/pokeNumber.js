const pokeNumber = (number) => {
  const digits = ("" + number).split("");
  if (digits.length === 3) {
    return `#${number}`;
  } else if (digits.length === 2) {
    return `#0${number}`;
  } else {
    return `#00${number}`;
  }
};

export default pokeNumber;
