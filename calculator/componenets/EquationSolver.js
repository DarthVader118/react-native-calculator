import React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonContainer } from "./ButtonContainer";
import { EquationDisplayer } from "./EquationDisplayer"


export const EquationSolver = () => {
  let final
  const [ currVal, setCurrVal ] = useState("");
  const [ operator, setOperator ] = useState(null);
  const handlePress = (type, value) => {
    console.log(type, value)
    if(type === "number") {
      setCurrVal(`${currVal}${value}`)
    }
    if(type==='operator') {
      setOperator(value)
      setCurrVal(prev=>`${prev}${operator}`)
    }

    if(type === "clear") {
      setCurrVal('')
      setOperator(null)
    }
    if(type === "equal") {
      setCurrVal(eval(currVal))
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
        <EquationDisplayer equation={currVal}/>
        <ButtonContainer onPress={handlePress}/>
      </>
   )

}

