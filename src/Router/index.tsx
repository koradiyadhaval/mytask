import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import json from '../Util/Language/Eng/index.json';
// In App.js in a new project

import * as React from 'react';
import {Home} from '../Screens/Home';

/**
 *
 * @returns This is main ApplicationRouter Declared here
 */
export const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          options={{headerTitle: json.title}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
