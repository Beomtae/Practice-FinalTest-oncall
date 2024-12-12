import ERROR_MESSAGE from '../../constants/ERROR_MESSAGE.js';

const duplicate = input => {
  const set = new Set(input);
  if (input.length !== set.size) {
    throw new Error(ERROR_MESSAGE.DUPLICATE);
  }
};

const nameLength = input => {
  input.forEach(data => {
    if (data.length > 5) {
      throw new Error(ERROR_MESSAGE.NICKNAME);
    }
  });
};

const people = input => {
  if (input.length < 5 || input.length > 35) {
    throw new Error(ERROR_MESSAGE.AMOUNT);
  }
};

const ValidateNormal = input => {
  duplicate(input);
  nameLength(input);
  people(input);
};

export default ValidateNormal;
