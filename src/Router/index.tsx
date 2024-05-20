import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import json from "../Util/Language/Eng/index.json";
// In App.js in a new project

import * as React from "react";
import { Login } from "../Screens/Login";
import { Home } from "../Screens/Home";
import { Screen_Home, Screen_Login } from "./RouterConstant";

/**
 *
 * @returns This is main ApplicationRouter Declared here
 */
export const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen_Login}>
        <Stack.Screen
          options={{
            fullScreenGestureEnabled: true,
            headerShown: false,
          }}
          name={Screen_Login}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const AppHomestack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen_Home}>
        <Stack.Screen
          options={{
            fullScreenGestureEnabled: true,
            headerShown: true,
          }}
          name={Screen_Home}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
