import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Coin } from "../services/types";
import { FLEX_FILL, FLEX_ROW } from "../theme/common";
import spacing from "../theme/spacing";

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
          {item.current_price && <Text>${item.current_price.toLocaleString()}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: spacing[4],
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
    marginRight: spacing[2],
  },
  coinInfo: {
    ...FLEX_FILL,
  },
});
export default MarketItem;
