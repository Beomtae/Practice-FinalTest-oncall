import ERROR_MESSAGE from '../../constants/ERROR_MESSAGE.js';

const ValidateHoliday = input => {
  const set = new Set(input);
  if (input.length !== set.size) {
    throw new Error(ERROR_MESSAGE.DUPLICATE);
  }
};
export default ValidateHoliday;
