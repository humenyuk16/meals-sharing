const ReviewMessage = ({ message, type }) => {
  return message ? <div className={`${type}-message`}>{message}</div> : null;
};

export default ReviewMessage;
