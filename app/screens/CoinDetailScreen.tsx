import { RouteProp, useRoute } from "@react-navigation/native";
import * as React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/MainNavigation";
import Routes from "../navigation/Routes";
import useFetchCoinDetails from "../queries/useFetchCoinDetail";
import { TITLE } from "../theme/common";
import spacing from "../theme/spacing";

const CoinDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.COIN_DETAIL>>();
  const { id } = route.params;

  const { data, isLoading } = useFetchCoinDetails({ coin_id: id });
  const details = data?.data;

  if (isLoading) return <ActivityIndicator />;

  return (
    <View style={styles.detailContainer}>
      {details ? (
        <View>
          <Text style={styles.detailTitle}>
            {details.name} ({details.symbol.toUpperCase()})
          </Text>
          <Text>Current Price: ${details.market_data.current_price.usd}</Text>
          <Text>
            Market Cap: ${details.market_data.market_cap.usd.toLocaleString()}
          </Text>
          <Text>
            Total Supply:{" "}
            {details.market_data.total_supply?.toLocaleString() ?? "N/A"}
          </Text>
          <Text>
            Circulating Supply:{" "}
            {details.market_data.circulating_supply?.toLocaleString() ?? "N/A"}
          </Text>
        </View>
      ) : (
        <Text>Error Loading Details</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    padding: spacing[4],
  },
  detailTitle: TITLE,
});

export default CoinDetailScreen;
