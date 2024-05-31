import { useState } from "react";

const useSearchMeals = () => {
  const baseUrl = "https://meals-sharing.onrender.com";
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMeals = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `${baseUrl}/api/meals?title=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      setError(error);
      console.error("There was an error fetching the data:", error); // Log the error
    } finally {
      setIsLoading(false);
    }
  };

  return { meals, isLoading, error, searchMeals };
};

export default useSearchMeals;
