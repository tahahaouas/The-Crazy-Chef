// navigation.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import FavoriteScreen from './screens/FavoriteScreen';
import HomeScreen from './screens/HomeScreen';
import NewRecipe from './screens/NewRecipe';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New Recipe" component={NewRecipe} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
