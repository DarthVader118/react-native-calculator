import React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonContainer } from "./ButtonContainer";
import { EquationDisplayer } from "./EquationDisplayer"


export const EquationSolver = () => {
  let final
  const [ currVal, setCurrVal ] = useState("0");
  const [ operator, setOperator ] = useState(null);
  handlePress = (type, value) => {
    if(type === "number") {
      setCurrVal(`${currVal}${value}`)
    }
    if(type==='operator') {
      setOperator(value)
      setCurrVal(prev=>`${prev}${operator}`)
    }

    if(type === "clear") {
      setCurrVal('0')
      setOperator(null)
    }
    if(type === "equal") {
      final=eval(currVal)
/*      if(operator === "+") {

    }

      if(operator === "/") {

      }

      if(operator === "-") {

      }

      if(operator === "*") {
      }*/
    }
  }

    return (
      <>
        <Text>{final}</Text>
        <EquationDisplayer equation="1+2+3+4+5+6"/>
        <ButtonContainer />
      </>
   )

}

