import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { IDealDetails } from "../models/deal-interface";

import { styles } from "./DetailedCardComponent.styles";

export default function DetailedCardComponent({ data }: Props) {
  /**
   *
   * prepare discription for deal
   *
   * @returns {string} returns a string discription for deal
   *
   */
  const dealDescription = () =>
    `Now get this amazing game form store with id ${data?.gameInfo.storeID} on a discounted price and save a lot. This game has steam rating count of ${data?.gameInfo.steamRatingCount} and meta critic score of ${data?.gameInfo.metacriticScore}.`;

  return data ? (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.headerStyle}>
        {data.gameInfo.name}
      </Text>
      <View style={styles.contentStyle}>
        <Image
          source={{ uri: data.gameInfo.thumb }}
          style={styles.imageStyles}
        />
        <View style={styles.priceInfoContainer}>
          <View>
            <Text style={styles.priceInfoHeader}>Sale Price</Text>
            <Text style={styles.priceInfo}>{data.gameInfo.salePrice}</Text>
          </View>
          <View>
            <Text style={styles.priceInfoHeader}>Retail Price</Text>
            <Text style={styles.priceInfo}>{data.gameInfo.retailPrice}</Text>
          </View>
        </View>
        <Text style={styles.descriptionStyle}>{dealDescription()}</Text>
      </View>
    </View>
  ) : null;
}

interface Props {
  data: IDealDetails | undefined;
}
