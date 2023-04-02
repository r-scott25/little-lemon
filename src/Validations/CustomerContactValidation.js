import * as Yup from "yup";

const phoneValidPattern = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// nameValidPattern Criteria:
//     Allows alphabets and spaces only
//     Must start with an alphabet
//     Can have hyphens and apostrophes between words
const nameValidPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const customerContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Please enter your first name.")
    .matches(nameValidPattern, "Please enter your first name.")
    .min(1, "Please enter your first name."),
  lastName: Yup.string()
    .required("Please enter your last name.")
    .matches(nameValidPattern, "Please enter your last name.")
    .min(1, "Please enter your last name."),

  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter your email address."),
  phone: Yup.string()
    .required("Please enter your phone number")
    .matches(phoneValidPattern, "Phone number is not valid")
    .min(10, "Phone number should be 10 digits.")
    .max(10, "Phone number should be 10 digits."),
  textUpdates: Yup.boolean(),
});
