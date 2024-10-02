import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import Onboarding from '../components/onboarding'


const ExplicaContato1Screen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Onboarding />
        <StatusBar style="auto" />
      </View>
  );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExplicaContato1Screen;