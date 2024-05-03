import { Link } from "react-router-dom";
import LimitedMealsList from "./LimitedMealsList";

const HomePage = () => {
  const numberOfListToShow = 3;
  return (
    <div className="homepage">
      <h1 className="homepage-title">Meal Sharing</h1>

      <div className="overlay">
        <img src="/hero.jpg" alt="hero" className="homepage-image" />
        <div className="overlay-text">
          <p className="homepage-description">
            "Bringing food lovers together. Discover, share and review delicious
            dining experiences!"
          </p>
        </div>
      </div>
      <LimitedMealsList limit={numberOfListToShow} />
      <Link to="/meals" className="homepage-link">
        View all meals
      </Link>
    </div>
  );
};

export default HomePage;
