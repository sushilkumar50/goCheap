import * as React from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  withNavigation,
} from "react-navigation";

import { IDealsResponse } from "../models/deal-interface";
import DealListItem from "./DealListItem";
import { styles } from "./GameDealsListComponent.styles";
import { HEADER_LABELS } from "../constants/app-wide-contants";

interface Props {
  deals: IDealsResponse[];
  navigation?: NavigationScreenProp<NavigationState>;
}

function GameDealsListComponent({ deals, navigation }: Props) {
  const { container } = styles;

  /**
   *
   * returns jsx for list header
   *
   */
  const listHeaderComponen = () => {
    return (
      <DealListItem
        title={HEADER_LABELS.title}
        salePrice={HEADER_LABELS.salePrice}
        storeID={HEADER_LABELS.storeID}
        isHeader
      />
    );
  };

  /**
   *
   * @param {IDealsResponse} item - deals item
   *
   * @returns {JSX} returns sigle list item to render
   */
  const listItemRenderer = ({ item }: { item: IDealsResponse }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate("DetailedView", { id: item.dealID });
        }}
      >
        <DealListItem
          title={item.title}
          salePrice={item.salePrice}
          storeID={item.storeID}
          isHeader={false}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={container}>
      <FlatList
        data={deals}
        keyExtractor={(deal) => deal.dealID}
        renderItem={listItemRenderer}
        ListHeaderComponent={listHeaderComponen}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

export default withNavigation(GameDealsListComponent);
