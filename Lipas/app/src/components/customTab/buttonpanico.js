import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

function ButtonPanico ({focused}) {
   return(
    <View style={[styles.container, { backgroundColor: focused ? '#FFEDE3' : '#3C0609'}]}>
      <Feather name='volume-1' size={30} color={focused ? '#49070A' : '#FFEDE3'}/>
    </View>
   );
}

const styles = StyleSheet.create({
    container:{
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    });

export default ButtonPanico;