import * as React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./SearchBarComponent.styles";

interface Props {
  inputChangeHandler: (value: string) => any;
}

/**
 *
 * this component only takes user input and calls input handler
 *
 * @param {Function} inputChangeHandler - callback to be called when user types
 */
export default function SearchBarComponent({ inputChangeHandler }: Props) {
  const SEARCH_PLACEHOLDER = "Search by game or storeId";
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.textInputStyle}
        placeholder={SEARCH_PLACEHOLDER}
        onChangeText={(input) => {
          inputChangeHandler(input);
        }}
      />
    </View>
  );
}
