import { Link } from "react-router-dom";
const Meal = ({ meal }) => {
  if (!meal) {
    return <div>Ooops meal data not available now</div>;
  }
  return (
    <div className="MealsList-item ">
      <Link to={`/meals/${meal.id}`}>
        <img
          className="meal-card-image"
          src={meal.image_url}
          alt={meal.title}
        />
        <h3 className="meal-card-title">{meal.title}</h3>
        <p className="meal-card-description">{meal.description}</p>
        <p className="meal-card-price">Price: {meal.price}kr</p>
      </Link>
    </div>
  );
};

export default Meal;
