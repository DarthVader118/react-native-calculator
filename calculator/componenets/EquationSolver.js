import React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonContainer } from "./ButtonContainer";
import { EquationDisplayer } from "./EquationDisplayer"


export const EquationSolver = () => {
  const [ currVal, setCurrVal ] = useState("0");
  const [ operator, setOperator ] = useState(null);
  handlePress = (type, value) => {
    if(type === "number") {
      setCurrVal(`${currVal}${value}`)
    }
    if(type==='operator') {

    }

    if(type === "clear") {
    }
    if(type === "equal") {
      if(operator === "+") {

    }

      if(operator === "/") {

      }

      if(operator === "-") {

      }

      if(operator === "*") {
      }
    }
  }

    return (
      <>
        <EquationDisplayer equation="1+2+3+4+5+6"/>
        <ButtonContainer />
      </>
   )

}

