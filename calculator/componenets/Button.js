import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const CalcButton = props => {
  
  return (
  <TouchableOpacity onPress={() => props.onPress(props.type, props.value)} style={styles.calcButton}>
    <Text style={styles.buttonText}>{props.value}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  calcButton : {
    width: "25%",
    height: "25%",
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
  },
   
   buttonText: {
     fontSize: 30,

   },
});
