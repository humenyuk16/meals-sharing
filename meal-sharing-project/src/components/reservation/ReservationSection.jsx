import { useState } from "react";
import "./Reservation.css";
import Modal from "../Modal";
import ReservationForm from "./FormReservation";
import ReservationErrorMessage from "./ErrorMessegeReservation";
import ReservationSuccessMessage from "./SuccessMessege";

const ReservationSection = ({ meal }) => {
  const [showForm, setShowForm] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleReservationSuccess = () => {
    setReservationSuccess(true);
    setTimeout(() => {
      setShowForm(false);
    }, 2000);
  };

  return (
    <div className="ReservationSection-container">
      <ReservationErrorMessage />
      {reservationSuccess && <ReservationSuccessMessage />}
      <button onClick={toggleForm} className="book-seat">
        Book Seat
      </button>

      {showForm && (
        <Modal onClose={toggleForm}>
          <ReservationForm
            mealId={meal.id}
            onSuccess={handleReservationSuccess}
            closeModal={toggleForm}
          />
        </Modal>
      )}
    </div>
  );
};

export default ReservationSection;
