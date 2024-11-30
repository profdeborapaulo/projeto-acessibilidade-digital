import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../components/customDrawer/input" 
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "../routes/tab";
import PerfilScreen from "../screens/perfil";
import FeedbackScreen from "../screens/feedback";
import SobreScreen from "../screens/sobre";
import ConfiguracaoScreen from "../screens/configuracao";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
    drawerStyle: {
    backgroundColor: '#FFEDE3',
    },
    headerTitleStyle:{
      fontFamily: 'DMSerifDisplay_400Regular',
      fontSize: 33,
    },
    headerStyle: {
    backgroundColor: '#49070A',
    },
    headerTintColor: '#FFEDE3', 
    drawerActiveTintColor: '#791227',
    drawerTintColor: '#FFEDE3', 
    
  }}>

    <Drawer.Screen name="Home" component={TabNavigator} options={{
      drawerIcon: ({color}) => (
       <Ionicons name="home-outline" size={22} color={color}/>
      ),
      }}/>
       <Drawer.Screen name="Perfil" component={PerfilScreen}options={{
      drawerIcon: ({color}) => (
       <Ionicons name="person-outline" size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen name="Sobre" component={SobreScreen}options={{
      drawerIcon: ({color}) => (
       <Ionicons name="information-circle-outline" size={22} color={color}/>
      )
    }}/>
      <Drawer.Screen name="Feedback" component={FeedbackScreen}options={{
      drawerIcon: ({color}) => (
       <Ionicons name="star-outline" size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen name="Configuração" component={ConfiguracaoScreen}options={{
      drawerIcon: ({color}) => (
       <Ionicons name="settings-outline" size={22} color={color}/>
      )
    }}/>
</Drawer.Navigator>
  );
}
export default DrawerNavigator;




