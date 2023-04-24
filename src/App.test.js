import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App, { initializeTimes, updateTimes } from "./App";


describe('App', () => {
//// Test the initializeTimes Function ////
test("Returns the correct expected value", () => {
  const expectedValue = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];
  render(
    <MemoryRouter>
      <App initializeTimes={initializeTimes} />
    </MemoryRouter>
  );
  const result = initializeTimes();

  expect(result).toEqual(expectedValue);
});

//// Test the updateTimes Function ////
test("Returns the same times as initializeTimes (this will change once logic for updating times is implemented", () => {
  const expectedTimes = initializeTimes();
  render(
    <MemoryRouter>
      <App updateTimes={updateTimes} />
    </MemoryRouter>
  );
  const selectedDate = new Date();

  const result = updateTimes(selectedDate);

  expect(result).toEqual(expectedTimes);
});
});
