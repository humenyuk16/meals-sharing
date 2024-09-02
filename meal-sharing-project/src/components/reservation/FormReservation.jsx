import { useState } from "react";
import ReservationFormInputs from "./ReservationFormInputs.jsx";

const ReservationForm = ({ mealId, onSuccess }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const makeReservation = async (formData) => {
    try {
      const response = await fetch(
        "https://meals-sharing.onrender.com/api/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        onSuccess();
      } else {
        const errorText = await response.text();
        console.error("Error making reservation:", errorText);
        throw new Error("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error("Error making reservation:", error);
      setError(error.message);
    }
  };

  const handleFormSubmit = async (formData) => {
    formData.meal_id = mealId;
    makeReservation(formData);
  };

  return (
    <div className="ReservationForm">
      <h2 className="ReservationForm-title">Make a reservation</h2>
      {success && <div>Reservation successful!</div>}
      <ReservationFormInputs mealId={mealId} onSubmit={handleFormSubmit} />
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ReservationForm;
