const ReservationErrorMessage = ({ message }) => {
  return message ? <div className="error-message">{message}</div> : null;
};

export default ReservationErrorMessage;
