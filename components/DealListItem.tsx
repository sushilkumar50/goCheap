import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "./DealListItem.styles";

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

interface Props {
  title: string;
  salePrice: string;
  storeID: string;
  isHeader: boolean;
}
