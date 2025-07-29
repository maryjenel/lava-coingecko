import axios from "axios";
import { API_URL } from "./constants";
import { FetchCoinsParams } from "./types";

const fetchCoins = ({
  vs_currency,
  order,
  per_page,
  page,
  sparkline,
}: FetchCoinsParams) => {
  return axios.get(`${API_URL}/coins/markets`, {
    params: {
      vs_currency,
      order,
      per_page,
      page,
      sparkline,
    },
  });
};

const fetchCoinDetail = ({ coin_id }: { coin_id: string }) => {
  return axios.get(`${API_URL}/coins/${coin_id}`);
};
export { fetchCoinDetail, fetchCoins };

export default {};
