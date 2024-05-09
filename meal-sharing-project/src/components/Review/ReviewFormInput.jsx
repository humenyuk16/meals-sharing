import "./Review.css";
const ReviewFormInput = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="title"> Add title:</label>
      <input
        className="review-input"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description">What is your opinion about this meal?</label>
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
    </div>
  );
};
export default ReviewFormInput;
