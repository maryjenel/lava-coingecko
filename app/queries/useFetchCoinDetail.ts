import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetail } from "../services/api";
import { FETCH_DETAIL } from "./constants";

const useFetchCoinDetails = ({ coin_id }: { coin_id: string }) => {
  return useQuery({
    queryKey: [FETCH_DETAIL, coin_id],
    queryFn: () => fetchCoinDetail({ coin_id }),
  });
};

export default useFetchCoinDetails;
