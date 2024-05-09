import useFetch from "./useFetch";
import Meal from "./Meal";

const LimitedMealsList = ({ limit }) => {
  const { data: allMeals, isLoading, error } = useFetch("/api/meals");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Slice the meals array based on the limit
  const limitedMeals = limit ? allMeals.slice(0, limit) : allMeals;

  return (
    <div>
      <div className="MealsList-container-limited">
        {limitedMeals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default LimitedMealsList;
