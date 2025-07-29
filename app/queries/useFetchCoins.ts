import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCoins } from "../services/api";
import { FetchCoinsParams } from "../services/types";
import { FETCH_COINS } from "./constants";

const useFetchCoins = ({ vs_currency, order, per_page }: FetchCoinsParams) => {
  const perPageNumber = Number(per_page);

  return useInfiniteQuery({
    queryKey: [FETCH_COINS, vs_currency, order, per_page],
    queryFn: async ({ pageParam }) => {
      try {
        const response = await fetchCoins({
          page: `${pageParam}`,
          vs_currency,
          order,
          per_page,
          sparkline: false,
        });
        return response.data;
      } catch (error) {
        console.error("Failed to fetch coins:", error);
        return undefined; // signal error to getNextPageParam
      }
    },
    initialPageParam: 1,
    retry: false,
    getNextPageParam: (lastPage, allPages) => {
      // If request failed (e.g. queryFn returned undefined), stop pagination
      if (!Array.isArray(lastPage) || lastPage.length < perPageNumber) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
};
export default useFetchCoins;
