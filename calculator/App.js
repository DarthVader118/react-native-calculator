import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { EquationSolver } from "./componenets/EquationSolver";


export default function App() {
  return (
    <View style={styles.layout}>
      <EquationSolver />
    </View>
  );
}

const styles = StyleSheet.create({
  layout : {
    flex: 1,
    backgroundColor: "black",
  },
});
