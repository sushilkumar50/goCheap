import * as React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  message: string;
}
export default function ErrorMessageComponent({ message }: Props) {
  return <Text style={styles.errorMessage}>{message}</Text>;
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    fontWeight: "600",
    color: "#394867",
    alignSelf: "center",
    marginTop: 50,
  },
});
