import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "./DealListItem.styles";

interface Props {
  title: string;
  salePrice: string;
  storeID: string;
  isHeader: boolean;
}

/**
 *
 * @param {string} title - Game title
 *
 * @param {string} salePrice - deal sale price for game
 *
 * @param {string} storeID - store id where deal is avilable
 *
 * @param {boolean} isHeader - decides weathe item being rendered is list header or not
 */

export default function DealListItem({
  title,
  salePrice,
  storeID,
  isHeader,
}: Props) {
  const { containerStyle, itemStyle, headerStyle } = styles;
  return (
    <View style={[containerStyle, isHeader && headerStyle]}>
      <Text style={itemStyle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={itemStyle} numberOfLines={1}>
        {salePrice}
      </Text>
      <Text style={itemStyle} numberOfLines={1}>
        {storeID}
      </Text>
    </View>
  );
}
