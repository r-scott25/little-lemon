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
import BookingPage from "../routes/BookingPage";


describe("BookingForm", () => {






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
    const updateTimes = jest.fn();
    const availableTimes = ["11:00 AM", "12:00 PM", "1:00 PM"];
    const bookedTimes = [];

    render(
      <MemoryRouter>
        <BookingForm
           availableTimes={availableTimes}
           updateTimes={updateTimes}
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
        "Reservation seating: Outdoor"
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

      expect(updateTimes).toHaveBeenCalledWith({
        type: "remove",
        payload: "1:00 PM",
      });
      expect(
        screen.getByText(/customer contact information/i)
      ).toBeInTheDocument();
    });
  });
});
