import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginHorizontal: 20,
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
    marginTop: 10,
  },
  headerStyle: {
    fontSize: 18,
    color: "#394867",
    fontWeight: "bold",
    marginBottom: 10,
    borderColor: "#ddd",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  contentStyle: {
    justifyContent: "center",
    borderColor: "#ddd",
    borderTopWidth: 1,
    padding: 20,
    alignItems: "center",
  },
  priceInfoHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#394867",
  },
  priceInfo: {
    color: "#394867",
  },
  priceInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionStyle: {
    color: "#394867",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
  },
});
