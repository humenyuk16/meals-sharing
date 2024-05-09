import { useState } from "react";
import ReviewFormContent from "./ReviewFormContent";
import ReviewMessage from "./ReviewMessage";
import "./Review.css";

const ReviewSection = ({ mealId }) => {
  const [showForm, setShowForm] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleReviewSuccess = () => {
    setIsReviewAdded(true);
    setTimeout(() => {
      setShowForm(false);
      setIsReviewAdded(false);
    }, 2000);
  };

  return (
    <div className="ReviewSection-container">
      <ReviewMessage
        message={isReviewAdded ? "Review added successfully!" : null}
        type="success"
      />
      <button onClick={toggleForm} className="write-review-button">
        {showForm ? "Close Review Form" : "Write Review"}
      </button>
      {showForm && (
        <ReviewFormContent
          mealId={mealId}
          onReviewSuccess={handleReviewSuccess}
        />
      )}
    </div>
  );
};

export default ReviewSection;
