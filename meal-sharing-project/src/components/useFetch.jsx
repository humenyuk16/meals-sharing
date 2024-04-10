import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const parsedData = await response.json();

        if (isMounted) {
          setData(parsedData);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
          console.error("There was an error fetching the data:", error);
        }
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
