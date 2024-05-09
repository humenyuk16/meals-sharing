import ReviewFormInput from "./ReviewFormInput";
const ReviewFormContent = ({
  formData,
  handleChange,
  handleSubmit,
  isReviewAdded,
}) => {
  return (
    <div className="review-form-container">
      <h1>Review Form</h1>
      {isReviewAdded && <p>Review added successfully!</p>}
      <form onSubmit={handleSubmit} className="review-form">
        <ReviewFormInput formData={formData} handleChange={handleChange} />
        <button type="submit" className="review-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};
export default ReviewFormContent;
