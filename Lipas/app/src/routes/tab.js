import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Feather } from '@expo/vector-icons';

import HomeScreen from '../screens/home';
import BotaoPanicoScreen from "../screens/botaoPanico";
import ManualDeDefesaScreen from '../screens/manualDesfesa';

import ButtonPanico from '../components/customTab/buttonpanico';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      barStyle={{
      backgroundColor: '#49070A',
      borderTopColor: 'transparent',
      margin: 0,
      }}
      activeColor='#3C0609'
      inactiveColor='#FFEDE3'
      >

      <Tab.Screen
        name='Local'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name='map-pin' size={25} color={color}/>
          )
        }}
      />

      <Tab.Screen
        name='Botao Pânico'
        component={BotaoPanicoScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name='volume-1' size={25} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Manual'
        component={ManualDeDefesaScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name='book' size={25} color={color}/>
          )
        }}
      />

    </Tab.Navigator>
  );
}


export default TabNavigator;
