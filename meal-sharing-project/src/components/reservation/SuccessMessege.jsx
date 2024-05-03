const ReservationSuccessMessage = ({ show }) => {
  return show ? (
    <div className="success-message">Reservation successful!</div>
  ) : null;
};

export default ReservationSuccessMessage;
