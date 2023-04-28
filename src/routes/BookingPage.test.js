import {
  render,
  screen,
  fireEvent,
  act,
  selectOptions,
} from "@testing-library/react";
// import { selectOptions } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import BookingPage, {initializeTimes} from "./BookingPage";


describe("BookingPage", () => {

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
      <BookingPage initializeTimes={initializeTimes} />
    </MemoryRouter>
  );
  const result = initializeTimes();

  expect(result).toEqual(expectedValue);
});
});