import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Movies from "./MoviesTab";
import Search from "./SearchTab";
import TV from "./TVTab";

const Tab = createMaterialTopTabNavigator();

const AppTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Search Results" component={Search} />
    <Tab.Screen name="TV Shows" component={TV} />
  </Tab.Navigator>
);

export default AppTab;
