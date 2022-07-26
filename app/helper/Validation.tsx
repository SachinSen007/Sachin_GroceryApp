let emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const validateInput = {
  emailValidator: (val: string) => {
    return emailRegex.test(val);
  },
  minLengthValidator: (val: string, minLength: number) => {
    return val.length >= minLength;
  },

  equalToValidator: (val: string, checkValue: string) => {
    return val === checkValue;
  },

  emptyValue: (val: string) => {
    if (val == '') {
      return true;
    }
    return false;
  },

  passwordValidator: (val: string) => {
    return passwordRegex.test(val);
  },
  phoneValidator: (val: string) => {
    if (val.length < 10) {
      return true;
    } else {
      return false;
    }
  },
};

export default validateInput;