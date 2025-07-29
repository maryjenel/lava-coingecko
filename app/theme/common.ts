import { TextStyle, ViewStyle } from "react-native";
import FontSize from "./fontSize";
import spacing from "./spacing";

export const FLEX_JCC: ViewStyle = {
  justifyContent: "center",
};

export const FLEX_FILL: ViewStyle = {
  flex: 1,
};
export const FLEX_ROW: ViewStyle = {
  flexDirection: "row",
};

/**
 * container
 */
export const CONTAINER: ViewStyle = {
  ...FLEX_JCC,
  flex: 1,
};

/**
 * title
 */

export const TITLE: TextStyle = {
  fontSize: FontSize.L,
  fontWeight: "bold",
  marginBottom: spacing[3],
};

export const INPUT = {
  borderColor: "gray",
  borderWidth: 1,
  padding: spacing[3],
  marginHorizontal: spacing[3],
  borderRadius: 8,
};

export default {};
