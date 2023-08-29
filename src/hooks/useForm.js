import React from "react";
import { REGEX_EMAIL } from "../utils/constants";

function useForm(inputValues = {}) {
  const [values, setValues] = React.useState(inputValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const emailSettings = {
    email: {
      regExp: REGEX_EMAIL,
      validationError: 'Некорректный адрес электронной почты',
    }
  }

  function checkEmailValidation(name, value) {
    if (!emailSettings[name]) {
      return;
    }

    if (!emailSettings[name].regExp.test(value)) {
      setErrors({ ...errors, [name]: emailSettings[name].validationError });
      setIsValid(false);
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('.form').checkValidity());
    checkEmailValidation(name, value)
  };

  return { values, handleChange, setValues, errors, isValid, setErrors, setIsValid };
}


export default useForm