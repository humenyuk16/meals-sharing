import { useState } from "react";
import Modal from "../Modal";
import ReviewFormContent from "./ReviewFormContent";

const ReviewForm = ({ mealId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stars: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.stars) {
      alert("Please fill in all fields.");
      return;
    }

    const reviewData = {
      meal_id: mealId,
      ...formData,
    };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit review.");
      }
      console.log("Review submitted successfully!");
      setIsReviewAdded(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsReviewAdded(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting review:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="review-button">
        {isOpen ? "Close Form" : "Write Review"}
      </button>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <ReviewFormContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isReviewAdded={isReviewAdded}
          />
        </Modal>
      )}
    </div>
  );
};

export default ReviewForm;
