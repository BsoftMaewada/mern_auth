//pull in validator and is-empty dependencies
const validator = require('validator');
const isEmpty = require('is-empty');

//Export the function validateRegisterInput, 
//which takes in data as a parameter(sent from our frontend registration form, 


module.exports = function validateRegisterInput(data) {
  let error = {}; //Instantiate our errors object

  //Convert all empty fields to an empty string before running
  //validation checks(validator only works with strings).

  //Coverts empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //Check for empty fields, valid email formats, password requirements
  //and confirm password equality using validator functions

  //name checks
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmpty(data.email)) {
    errors.email = "Email is invalid";
  }

  //password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (!validator.equal(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

    //Return our errors object with any and all errors contained as well as an 
    //isValid boolean that checks to see if we have any errors

    return {
        errors,
        isValid, isEmpty(errors)
    };
};