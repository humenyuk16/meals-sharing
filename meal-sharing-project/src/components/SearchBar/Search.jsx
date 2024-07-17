import { useState } from "react";
import useSearchMeals from "./useSearchMeal";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { meals, isLoading, error, searchMeals } = useSearchMeals();
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (query.trim()) {
      searchMeals(query);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setQuery(capitalizedValue);
    if (capitalizedValue.trim()) {
      searchMeals(capitalizedValue);
    }
  };

  const handleMealClick = (mealId) => {
    setQuery("");
    navigate(`/meals/${mealId}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch} className="form">
        <input
          type="text"
          placeholder="Search meals..."
          value={query}
          onChange={handleInputChange}
          className="input"
        />
        <button
          type="button"
          onClick={() => setQuery("")}
          className="clearButton"
        >
          &times;
        </button>
      </form>
      {query && meals.length > 0 && (
        <ul className="dropdown">
          {meals.map((meal) => (
            <li
              key={meal.id}
              className="dropdownItem"
              onClick={() => handleMealClick(meal.id)}
            >
              <span>{meal.title}</span>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
export default SearchBar;
