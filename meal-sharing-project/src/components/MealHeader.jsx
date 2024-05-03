const MealHeader = ({ meal }) => {
  return (
    <div className="Meal-detail-header">
      <img src={meal.image_url} alt={meal.title} className="MealDetail-image" />
      <div className="MealDetail-info">
        <h2 className="MealDetail-title">{meal.title}</h2>
        <p className="MealDetail-description">{meal.description}</p>
        <p className="MealDetail-price">Price: ${meal.price}</p>
        <p className="MealDetail-location">Location: {meal.location}</p>
      </div>
    </div>
  );
};

export default MealHeader;
