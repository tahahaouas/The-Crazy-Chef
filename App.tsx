import React from 'react';
import { RecipesProvider } from './context/RecipesContext';
import AppNavigator from './navigation';

export default function App() {
  return (
    <RecipesProvider>
      <AppNavigator />
    </RecipesProvider>
  );
}
