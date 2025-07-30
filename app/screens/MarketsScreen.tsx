import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MarketItem from "../components/MarketItem";
import { RootStackParamList } from "../navigation/MainNavigation";
import Routes from "../navigation/Routes";
import useFetchCoins from "../queries/useFetchCoins";
import { Coin } from "../services/types";
import { FLEX_FILL, INPUT } from "../theme/common";

export type MarketScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.MARKETS
>;

const MarketsScreen = () => {
  const navigation = useNavigation<MarketScreenNavigationProp>();

  const [search, setSearch] = React.useState<string>("");

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isRefetching, isLoading } =
    useFetchCoins({
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "20",
    });

  if (isLoading && !data) {
    return <ActivityIndicator />;
  }

  const allCoins = Array.isArray(data?.pages)
    ? data.pages.flatMap((page) => (Array.isArray(page) ? page : []))
    : [];

  const filteredCoins =
    search.trim() === ""
      ? allCoins
      : allCoins?.filter(
          (coin) =>
            coin.name?.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol?.toLowerCase().includes(search.toLowerCase()),
        );

  const renderItem = ({ item }: { item: Coin }) => {
    return (
      <MarketItem
        item={item}
        onPress={() => {
          navigation.navigate(Routes.COIN_DETAIL, { id: item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by name or symbol"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredCoins}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={() => {
          const filtered = search.trim() !== "" ? filteredCoins.length : null;
          const allowPagination = search.trim() === "" || (filtered && filtered > 0);
          if (allowPagination && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator style={{ margin: 16 }} /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_FILL,
  },
  searchInput: { ...INPUT },
});

export default MarketsScreen;
