import * as Yup from "yup";

export const reservationSchema = Yup.object().shape({
  date: Yup.date().required("Please select a date."),
  time: Yup.string().required("Please select a time."),
  occasion: Yup.string().required("Please select an occasion."),
  guests: Yup.number()
    .min(1, "Please select the number of guests.")
    .required("Please select the number of guests"),
  seating: Yup.string().required("Please select your seating preference."),
  specialRequests: Yup.string(),
});
