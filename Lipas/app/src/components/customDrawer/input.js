import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from  '@react-navigation/drawer';

function CustomDrawer (props) {
   return(
    <View>
      <DrawerItemList {...props} />
    </View>
   );
}

const styles = StyleSheet.create({
    });

export default CustomDrawer;