import { fetchAPI, submitAPI } from "../LittleLemonAPI.js";

export const fetchData = (date, formData) => {
  fetchAPI(date)
    .then((response) => response.json())
    .then((date = updateTimes(date)));
  submitAPI(formData).then((response) => response.json());
};

// Initialize the available times as an array of strings
export const initializeTimes = () => {
  return {
    availableTimes: fetchAPI(new Date()),
  };
};

// Update the available times based on the selected date
export const updateTimes = (state, payload) => ({
  ...state,
  availableTimes: fetchAPI(new Date(payload)),
});

console.log("updateTimes:", updateTimes);

export function availableTimesReducer(state, { type, payload }) {
  switch (type) {
    case "SET_DATE":
      return { ...state, date: payload };
    case "SET_AVAILABLE_TIMES":
      return { ...state, availableTimes: payload };
    default:
      return state;
  }
}
