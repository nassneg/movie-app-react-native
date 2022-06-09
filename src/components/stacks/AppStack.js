import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";
import WebScreen from "../screens/WebScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={IndexScreen} />
      <Tab.Screen name="Search Results" component={ShowScreen} />
      <Tab.Screen name="TV Shows" component={WebScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppStack;
