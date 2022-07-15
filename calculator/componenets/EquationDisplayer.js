import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const EquationDisplayer = props => {
  return (
    <View style={styles.equationDisplayer}>
      <Text style={styles.equationText}>{props.equation}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  equationDisplayer : {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 70,
    marginBottom: 70,
    marginHorizontal: 20,
  },
  equationText: {
    fontSize: 70,
    padding: 5,
    color: "white",
  },
});
