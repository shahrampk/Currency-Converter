import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const json = await res.json();
        setData(json[currency]); // Store only the currency rates (not the full object)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
