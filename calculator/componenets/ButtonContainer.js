import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CalcButton } from "./Button"

export const ButtonContainer = props => {
  return (
    <View style={styles.buttonContainer}>
      <CalcButton type="number" value="1" onPress={props.onPress}/>
      <CalcButton type="number" value="2" onPress={props.onPress}/>
      <CalcButton type="number" value="3" onPress={props.onPress}/>
      <CalcButton type="operator" value="/" onPress={props.onPress}/>
      <CalcButton type="number" value="4" onPress={props.onPress}/>
      <CalcButton type="number" value="5" onPress={props.onPress}/>
      <CalcButton type="number" value="6" onPress={props.onPress}/>
      <CalcButton type="operator" value="*" onPress={props.onPress}/>
      <CalcButton type="number" value="7" onPress={props.onPress}/>
      <CalcButton type="number" value="8" onPress={props.onPress}/>
      <CalcButton type="number" value="9" onPress={props.onPress}/>
      <CalcButton type="operator" value="+" onPress={props.onPress}/>
      <CalcButton type="clear" value='clear' onPress={props.onPress}/>
      <CalcButton type="number" value="0" onPress={props.onPress}/>
      <CalcButton type="equal" value='=' onPress={props.onPress}/>
      <CalcButton type="operator" value="-" onPress={props.onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer : {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
