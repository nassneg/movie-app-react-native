import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Movies from "./MoviesTab";
import Search from "./SearchTab";
import TV from "./TVTab";

const Tab = createMaterialTopTabNavigator();

const AppTab = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarOptions: {
        activeTintColor: "#e91e63",
        labelStyle: {
          fontSize: 12,
        },
      },
    }}
  >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Search Results" component={Search} />
    <Tab.Screen name="TV Shows" component={TV} />
  </Tab.Navigator>
);

export default AppTab;
