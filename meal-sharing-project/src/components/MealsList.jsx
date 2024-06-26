import useFetch from "./useFetch";
import Meal from "./Meal";

function MealsList() {
  const { data: mealsData, error, isLoading } = useFetch("/api/meals");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="MealsList-title">Meals List</h2>
      <div className="MealsList-container">
        {mealsData.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default MealsList;
