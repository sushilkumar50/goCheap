import * as React from "react";
import { View } from "react-native";

import { getDeals } from "../axios-client/axios-helper-service";
import { urlMap } from "../constants/app-wide-contants";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import { IDealsResponse } from "../models/deal-interface";
import GameDealsListComponent from "../components/GameDealsListComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import debouncer from "../components/utilities/debounce.utility";

/*
 this screen is responsible for fetching available deals on games.
 It renderes a list of all available deals and a search bar to search through deals 
*/

export default function GameDealsScreen() {
  // to store all deals and update all deals
  const [deals, updateDeals] = React.useState<IDealsResponse[]>([]);

  // stores filtered list od deals to display on screen
  const [filteredDeals, updateFilteredDeals] = React.useState<IDealsResponse[]>(
    []
  );

  //  stores error message in case of api failure
  const [errorMessage, updateErrorMessage] = React.useState<string>("");

  /*
   this methos is responsible for fetching list of deals and updating those in state
  */
  const getAllDeals = async () => {
    try {
      const gameDeals = await getDeals(urlMap.deals);
      updateDeals(gameDeals);
    } catch (err: any) {
      updateErrorMessage("Something went wrong...");
    }
  };

  /**
   * responsible for filtering through game deals list where searchtext matches storeId 
   * or is substring of game title
   @param {string} searchText - text to search in game deals list 
   @returns {void}
  */
  const serachDeals = (searchText: string): void => {
    if (!searchText) {
      updateFilteredDeals(deals);
    } else {
      const filteredList = deals.filter(
        (deal) =>
          deal.storeID
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          deal.internalName
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          deal.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
      );
      updateFilteredDeals(filteredList);
    }
  };

  /**
   * debounced search handler to delay search event by given delay
   */
  const debouncedSearchHandler = debouncer(serachDeals, 300);

  /**
   * fetches list of all deals on screen load
   */
  React.useEffect(() => {
    getAllDeals();
  }, []);

  /**
   * updates filtered list with full list when fetch new list from api
   */
  React.useEffect(() => {
    if (deals.length > 0) {
      debouncedSearchHandler("");
    }
  }, [deals]);

  return (
    <View style={{ backgroundColor: "#839b97", flex: 1 }}>
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
