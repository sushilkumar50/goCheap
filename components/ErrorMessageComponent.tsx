import * as React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes, { InferProps } from "prop-types";

export default function ErrorMessageComponent({
  message,
}: InferProps<typeof ErrorMessageComponent.propTypes>) {
  return <Text>{message}</Text>;
}

ErrorMessageComponent.propTypes = {
  message: PropTypes.string,
};
