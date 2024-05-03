import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import "./Review.css";

const AllReview = () => {
  const [reviewsWithMeals, setReviewsWithMeals] = useState([]);
  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:5001/api/reviews");

  useEffect(() => {
    const fetchReviewsWithMeals = async () => {
      try {
        const reviewsWithMealsData = await Promise.all(
          reviews.map(async (review) => {
            const response = await fetch(
              `http://127.0.0.1:5001/api/reviews/${review.id}/withMeal`
            );
            const data = await response.json();
            return { review, meal: data.meal };
          })
        );
        setReviewsWithMeals(reviewsWithMealsData);
      } catch (error) {
        console.error("Error fetching reviews with meals:", error);
      }
    };

    if (reviews) {
      fetchReviewsWithMeals();
    }
  }, [reviews]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <span className="star" key={i}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="Review-title">Read our reviews</h2>
      <div className="Review-container">
        {reviewsWithMeals.map(({ review, meal }) => (
          <div key={review.id} className="Review-item">
            <div className="Review-info">
              <h3>{review.title}</h3>
              <p className="Review-description">{review.description}</p>
              <p className="stars">{renderStars(review.stars)}</p>
              <p className="Review-date">
                Created at: {formatDate(review.created_date)}
              </p>
              <hr className="Review-hr" />
              <p className="Meal-review">{meal.title}</p>
              <p className="Meal-review-description"> {meal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
