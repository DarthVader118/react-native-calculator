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
    if(type === "number") {
      setCurrVal(`${currVal}${value}`)
    }
    if(type==='operator') {
      setOperator(value)
      setCurrVal(prev=>`${prev}${value}`)
    }

    if(type === "clear") {
      setCurrVal('')
      setOperator(null)
    }
    if(type === "equal") {
      const nameRegex = /[0-9]+([+\-\*\/][0-9]+)*/g;
      if(currVal !== null) {
        if (nameRegex.test(currVal)) {
          setCurrVal(eval(currVal.match(nameRegex)[0]))
        }
      
      }
      
    }
  
  }

    return (
      <>
        <EquationDisplayer equation={currVal}/>
        <ButtonContainer onPress={handlePress}/>
      </>
   )

}

