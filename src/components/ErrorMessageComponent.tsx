import * as React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes, { InferProps } from "prop-types";

interface Props {
  message: string;
}
export default function ErrorMessageComponent({ message }: Props) {
  return <Text>{message}</Text>;
}
