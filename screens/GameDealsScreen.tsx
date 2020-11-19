import * as React from "react";
import { View } from "react-native";

import { getDeals } from "../axios-client/axios-helper-service";
import { urlMap } from "../constants/app-wide-contants";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import { IDealsResponse } from "../models/deal-interface";
import GameDealsListComponent from "../components/GameDealsListComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import debouncer from "../utilities/debounce.utility";

export default function GameDealsScreen() {
  const [deals, updateDeals] = React.useState<IDealsResponse[]>([]);
  const [filteredDeals, updateFilteredDeals] = React.useState<IDealsResponse[]>(
    []
  );
  const [errorMessage, updateErrorMessage] = React.useState<string>("");

  const getAllDeals = async () => {
    try {
      const gameDeals = await getDeals(urlMap.deals);
      updateDeals(gameDeals);
    } catch (err: any) {
      updateErrorMessage("Something went wrong...");
    }
  };

  const serachDeals = (searchText: string) => {
    if (!searchText) {
      updateFilteredDeals(deals);
    } else {
      const filteredList = deals.filter(
        (deal) =>
          deal.storeID.includes(searchText) ||
          deal.internalName.includes(searchText) ||
          deal.title.includes(searchText)
      );
      updateFilteredDeals(filteredList);
    }
  };

  const debouncedSearchHandler = debouncer(serachDeals, 300);

  React.useEffect(() => {
    getAllDeals();
  }, []);

  React.useEffect(() => {
    if (deals.length > 0) {
      debouncedSearchHandler("");
    }
  }, [deals]);

  return (
    <View>
      {errorMessage ? <ErrorMessageComponent message={errorMessage} /> : null}
      {!errorMessage ? (
        <>
          <SearchBarComponent inputChangeHandler={debouncedSearchHandler} />
          <GameDealsListComponent deals={filteredDeals} />
        </>
      ) : null}
    </View>
  );
}
