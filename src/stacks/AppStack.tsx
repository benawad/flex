import { createBottomTabNavigator } from "react-navigation";
import { ViewCurrentLifts } from "../screens/ViewCurrentLifts";
import { LiftHistory } from "../screens/LiftHistory";
import { Settings } from "../screens/Settings";

export const AppStack = createBottomTabNavigator({
  ViewCurrentLifts,
  LiftHistory,
  Settings
});
