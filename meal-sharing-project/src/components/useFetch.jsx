import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      try {
        const response = await fetch(url, { signal });

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
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
