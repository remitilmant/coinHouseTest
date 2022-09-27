import { NavigationContainer } from "@react-navigation/native";
import { LookUp } from "./Screens/LookUp";
import { QRScan } from "./Screens/QRScan";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Group>
          <Tab.Screen name="LookUp" component={LookUp} />
          <Tab.Screen name="QRScan" component={QRScan} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
