import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);

  const sendRequest = useCallback(async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();
      const loadedData = [];

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedData);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong!");
    }
  }, []);
  return { error, isLoading, sendRequest, meals };
};

export default useHttp;