import ERROR_MESSAGE from '../../constants/ERROR_MESSAGE.js';

const ValidateMonth = month => {
  if (month < 1 || month > 12) {
    throw new Error(ERROR_MESSAGE.MONTH);
  }
};
export default ValidateMonth;
