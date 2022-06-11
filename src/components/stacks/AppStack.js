import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowScreen from "../screens/ShowScreen";
import AppTab from "../tabs/AppTab";

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppTab}
        options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ route }) => ({
          title: route.params.title ? route.params.title : route.params.name,
          headerBackTitle: "Back to List",
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
