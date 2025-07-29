import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CoinDetailScreen, MarketsScreen } from "../screens";
import Routes from "./Routes";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  [Routes.MARKETS]: undefined;
  [Routes.COIN_DETAIL]: { id: string };
};

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MARKETS} component={MarketsScreen} />
      <Stack.Screen name={Routes.COIN_DETAIL} component={CoinDetailScreen} />
    </Stack.Navigator>
  );
}
