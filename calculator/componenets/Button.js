import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const CalcButton = props => {
  
  return (
  <TouchableOpacity onPress={() => props.onPress(props.type, props.value)} style={styles.calcButton}>
    <Text>{props.value}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  calcButton : {
    width: 50,
    height: 50,
    backgroundColor: "white",

  },
});
