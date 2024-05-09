import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import MealHeader from "./MealHeader";
import ReservationSection from "./reservation/ReservationSection";
import ReviewForm from "./Review/ReviewForm";

const MealDetail = () => {
  const { id } = useParams();
  const apiUrl = `/api/meals/${id}`;
  const [meal, setMeal] = useState(null);
  const { data: mealData, isLoading, error } = useFetch(apiUrl);

  useEffect(() => {
    if (mealData && mealData.meal) {
      setMeal(mealData.meal[0]);
    }
  }, [mealData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!meal) {
    return <div>Meal not found</div>;
  }

  return (
    <div className="MealDetail-container">
      <MealHeader meal={meal} />
      <div className="MealDetail-button-container">
        <ReservationSection meal={meal} mealId={id} />
        <ReviewForm mealId={id} />
      </div>
    </div>
  );
};

export default MealDetail;
