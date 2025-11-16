import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "./Reservation";

describe("Reservation form", () => {
  test("renders heading and all main form fields", () => {
    render(<Reservation />);

    // Heading
    expect(
      screen.getByRole("heading", { name: /book your reservation/i })
    ).toBeInTheDocument();

    // First & Last Name (by placeholder)
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/last name/i)).toBeInTheDocument();

    // Date, Time, Guests, Occasion (by label)
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

    // Submit button
    expect(
      screen.getByRole("button", { name: /create reservation/i })
    ).toBeInTheDocument();
  });

  test("inputs accept user input and update value", () => {
    render(<Reservation />);

    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dateInput, { target: { value: "2025-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(firstNameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
    expect(dateInput).toHaveValue("2025-12-25");
    expect(timeSelect).toHaveValue("18:00");
    expect(guestsInput).toHaveValue(3); // jest-dom handles number here
    expect(occasionSelect).toHaveValue("Birthday");
  });

  test("guest input has required, min and max attributes", () => {
    render(<Reservation />);

    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "12");
  });

  test("required fields have the required attribute", () => {
    render(<Reservation />);

    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(firstNameInput).toBeRequired();
    expect(lastNameInput).toBeRequired();
    expect(dateInput).toBeRequired();
    expect(timeSelect).toBeRequired();
    expect(guestsInput).toBeRequired();
    expect(occasionSelect).toBeRequired();
  });

  test("submitting a valid form triggers alert with confirmation message", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<Reservation />);

    fireEvent.change(screen.getByPlaceholderText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-12-25" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /create reservation/i })
    );

    expect(alertMock).toHaveBeenCalledTimes(1);

    const message = alertMock.mock.calls[0][0];
    expect(message).toMatch(/your reservation is confirmed/i);
    expect(message).toMatch(/date: 2025-12-25/i);
    expect(message).toMatch(/time: 18:00/i);
    expect(message).toMatch(/guests: 4/i);

    alertMock.mockRestore();
  });
});
