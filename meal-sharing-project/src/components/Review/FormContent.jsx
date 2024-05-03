import "./Review.css";

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
        <label htmlFor="title"> Add title:</label>
        <input
          className="review-input"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">
          What is your opinion about this meal?
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="stars"> Give us a stars:</label>
        <input
          min="1"
          max="5"
          className="review-stars"
          type="number"
          name="stars"
          value={formData.stars}
          onChange={handleChange}
          placeholder="Stars"
        />
        <button type="submit" className="review-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewFormContent;
