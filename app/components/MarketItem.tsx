import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Coin } from "../services/types";
import { FLEX_FILL, FLEX_ROW } from "../theme/common";

export interface MarketItemProps {
  onPress: () => void;
  item: Coin;
}

const MarketItem = ({ item, onPress }: MarketItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Image source={{ uri: item.image }} style={styles.logo} />
        <View style={styles.coinInfo}>
          <Text>
            {item.name} ({item.symbol.toUpperCase()})
          </Text>
          {item.current_price && (
            <Text>${item.current_price.toLocaleString()}</Text>
          )}
        </View>
        {/* {item.price_change_percentage_24h && (
          <Text
            style={{
              color: item.price_change_percentage_24h >= 0 ? "green" : "red",
            }}
          >
            {item.price_change_percentage_24h?.toFixed(2)}%
          </Text>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  itemContent: {
    ...FLEX_ROW,
    alignItems: "center",
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  coinInfo: {
    ...FLEX_FILL,
  },
});
export default MarketItem;
