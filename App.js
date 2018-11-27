import { Navigation } from "react-native-navigation";

import { Provider } from "react-redux";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from "./src/store/configureStore";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "reactNativeProject.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "reactNativeProject.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "reactNativeProject.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "reactNativeProject.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);

Navigation.registerComponent("reactNativeProject.SideDrawer", () => SideDrawer);

// Start a app

Navigation.startSingleScreenApp({
  screen: {
    screen: "reactNativeProject.AuthScreen",
    title: "Login"
  }
});
