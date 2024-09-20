import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/routes/drawer";
import StackNavigator from "./src/routes/stack";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <DrawerNavigator />
      ) : (
        <StackNavigator onLoginSuccess={handleLoginSuccess} />
      )}
    </NavigationContainer>
  );
}
