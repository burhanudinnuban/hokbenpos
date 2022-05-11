// In App.js in a new project

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen, SplashScreen} from "../templates";

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
