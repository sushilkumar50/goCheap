import * as React from "react";
import { getDealDetails } from "../axios-client/axios-helper-service";
import { urlMap } from "../constants/app-wide-contants";
import { IDealDetails } from "../models/deal-interface";
import DetailedCardComponent from "../components/DetailedCardComponent";
import { NavigationStackScreenProps } from "react-navigation-stack";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import { View } from "react-native";

/**
 * this screen fetches and display single deal data
 * @param {NavigationStackScreenProps} navigation :- is provided by react navigation used to get deal id
 * to fetch perticular deal data
 */
export default function DetailedDealScreen({
  navigation,
}: NavigationStackScreenProps) {
  /**
   * @type {IDealDetails} to store deal data
   */
  const [deal, updateDeal] = React.useState<IDealDetails>();

  /**
   * @type {string} - stores error message
   */
  const [errorMessage, updateErrorMessage] = React.useState<string>("");

  const dealId = navigation.getParam("id");

  /**
   * fetches deal data and updates in state
   */
  const getDeal = async () => {
    try {
      const deal = await getDealDetails(urlMap.deals, dealId);
      updateDeal(deal);
    } catch (err: any) {
      updateErrorMessage("Something went wrong...");
      console.log("error", err);
    }
  };

  /**
   * fetches deal data on screen load only once
   */
  React.useEffect(() => {
    getDeal();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#839b97",
        flex: 1,
      }}
    >
      {errorMessage ? <ErrorMessageComponent message={errorMessage} /> : null}
      {!errorMessage ? <DetailedCardComponent data={deal} /> : null}
    </View>
  );
}
