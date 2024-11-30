import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/routes/drawer";
import StackNavigator from "./src/routes/stack";
import { ThemeProvider } from './src/screens/ThemeContext';  // Importando o ThemeContext
import { View } from "react-native";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          {isLoggedIn ? (
            <DrawerNavigator />
          ) : (
            <StackNavigator onLoginSuccess={handleLoginSuccess} />
          )}
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}