import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameDealsScreen from "./screens/GameDealsScreen";
import DetailedDealScreen from "./screens/DetailedDealScreen";

import { ROUTES, APP_TITLE } from "./constants/app-wide-contants";

const navigator = createStackNavigator(
  {
    Deals: GameDealsScreen,
    DetailedView: DetailedDealScreen,
  },
  {
    initialRouteName: ROUTES.DEALS,
    defaultNavigationOptions: {
      title: APP_TITLE,
    },
  }
);

export default createAppContainer(navigator);
