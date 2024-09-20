import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function FeedbackScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.home}> Feedback </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: '100%',
  },
  home: {
    color: '#49070A',
    fontSize: 40,
  },
});