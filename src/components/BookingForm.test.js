import {
  render,
  screen,
  fireEvent,
  act,
  selectOptions,
} from "@testing-library/react";
// import { selectOptions } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {

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


  test("Renders the BookingForm heading", () => {
    const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Reservation Details");
    expect(headingElement).toBeInTheDocument();
  });


  test("Should submit the form when all fields are valid", () => {
    const updateBookingInfo = jest.fn();
    const dispatchAvailableTimes = jest.fn();
    const availableTimes = ["11:00 AM", "12:00 PM", "1:00 PM"];
    const bookedTimes = [];

    render(
      <MemoryRouter>
        <BookingForm
          updateBookingInfo={updateBookingInfo}
          dispatchAvailableTimes={dispatchAvailableTimes}
          availableTimes={availableTimes}
          bookedTimes={bookedTimes}
        />
      </MemoryRouter>
    );
    act(() => {
      const dateInput = screen.getByLabelText("Reservation date");
      fireEvent.change(dateInput, { target: { value: "2023-04-23" } });

      const timeInput = screen.getByLabelText("Reservation time");
      fireEvent.change(timeInput, { target: { value: "1:00 PM" } });

      const occasionInput = screen.getByLabelText("Reservation occasion");
      fireEvent.change(occasionInput, { target: { value: "birthday" } });

      const guestsInput = screen.getByLabelText("Reservation guest count");
      fireEvent.change(guestsInput, { target: { value: "4" } });

      const seatingInput = screen.getByLabelText("Reservation seating");
      const outdoorSeatingOption = screen.getByLabelText(
        "Reservation seating: outdoor"
      );
      fireEvent.click(outdoorSeatingOption);

      const specialRequestsInput = screen.getByLabelText(
        "Reservation special requests"
      );
      fireEvent.change(specialRequestsInput, {
        target: { value: "No special requests" },
      });

      const submitButton = screen.getByRole("button", { name: /submit/i });
      fireEvent.click(submitButton);

    
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: "remove",
        payload: "1:00 PM",
      });
      expect(
        screen.getByText(/customer contact information/i)
      ).toBeInTheDocument();
    });
  });

