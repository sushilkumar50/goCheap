import * as React from "react";
import { getDealDetails } from "../axios-client/axios-helper-service";
import { urlMap } from "../constants/app-wide-contants";
import { IDealDetails } from "../models/deal-interface";
import DetailedCardComponent from "../components/DetailedCardComponent";
import { NavigationStackScreenProps } from "react-navigation-stack";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import { View } from "react-native";

interface Props {}

export default function DetailedDealScreen({
  navigation,
}: NavigationStackScreenProps) {
  const [deal, updateDeal] = React.useState<IDealDetails>();
  const [errorMessage, updateErrorMessage] = React.useState<string>("");
  const dealId = navigation.getParam("id");
  const getDeal = async () => {
    try {
      const deal = await getDealDetails(urlMap.deals, dealId);
      updateDeal(deal);
    } catch (err: any) {
      updateErrorMessage("Something went wrong...");
      console.log("error", err);
    }
  };

  React.useEffect(() => {
    getDeal();
  }, []);
  return (
    <View>
      {errorMessage ? <ErrorMessageComponent message={errorMessage} /> : null}
      {!errorMessage ? <DetailedCardComponent data={deal} /> : null}
    </View>
  );
}
