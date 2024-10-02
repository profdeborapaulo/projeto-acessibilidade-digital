import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../routes/tab";
import BotaoPanicoScreen from "../screens/botaoPanico";
import IndexScreen from "../screens/index";
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
        component={TabNavigator}
      /> 

      <Drawer.Screen
        name="Perfil"
        component={IndexScreen}
      /> 

     <Drawer.Screen
        name="Feedback"
        component={IndexScreen}
      />

     <Drawer.Screen
        name="Sobre"
        component={IndexScreen}
      />

     <Drawer.Screen
        name="Configuração"
        component={IndexScreen}
      />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
