import { useState, useEffect } from "react";

function useFetch(path) {
  const baseUrl =
    "https://dpg-cotlqdocmk4c73auabj0-a.frankfurt-postgres.render.com";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      try {
        const response = await fetch(baseUrl + path, { signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const parsedData = await response.json();

        setData(parsedData);
        setIsLoading(false);
        console.log("Data fetched successfully:", parsedData);
      } catch (error) {
        if (error.name === "AbortError") {
        } else {
          setError(error);
          setIsLoading(false);
          console.error("There was an error fetching the data:", error);
        }
      }
    }
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [path]);

  return { data, isLoading, error };
}

export default useFetch;
