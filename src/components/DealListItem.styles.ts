import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerStyle: {
    backgroundColor: "#f4f4f2",
    marginTop: 0,
    elevation: 2,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemStyle: {
    maxWidth: 140,
    minWidth: 140,
    paddingLeft: 10,
    overflow: "hidden",
  },
});
