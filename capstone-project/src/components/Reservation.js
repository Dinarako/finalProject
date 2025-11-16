
import React, { useState } from "react";
import "./Reservation.css"; // we'll create this for styling

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your reservation is confirmed!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`
    );
  };

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <h1>Book Your Reservation</h1>
        <form className="reservation-form" onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="name-row">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label>
              Choose Date
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
          </div>

          {/* Time */}
          <div className="form-group">
            <label>
              Choose Time
              <select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select time</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </label>
          </div>

          {/* Number of Guests */}
          <div className="form-group">
            <label>
              Number of Guests
              <input
                type="number"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="1"
                required
              />
            </label>
          </div>

          {/* Occasion */}
          <div className="form-group">
            <label>
              Occasion
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="reservation-button">
            Create Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;