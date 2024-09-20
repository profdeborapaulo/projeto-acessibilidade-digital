import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import BotaoPanicoScreen from "../screens/botaoPanico";
import 'react-native-gesture-handler';

import CustomDrawer from "../components/customDrawer/input"

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home"  drawerContent={(props) => <CustomDrawer {...props} />}      
     screenOptions={{
      headerTintColor: '#FFEDE3',
      headerStyle: { 
        backgroundColor: '#49070A',
      }, 
    }}>
      <Drawer.Screen
        name="  "
        component={HomeScreen}
      /> 

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
