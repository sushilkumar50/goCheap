import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    elevation: 2,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    borderRadius: 4,
  },
  imageStyles: {
    width: 300,
    height: 200,
    borderRadius: 4,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignSelf: "center",
  },
  contentStyle: {
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  priceInfoStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionStyle: {
    color: "#bbbfca",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 20,
  },
});
