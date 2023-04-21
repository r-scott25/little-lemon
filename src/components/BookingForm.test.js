import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

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