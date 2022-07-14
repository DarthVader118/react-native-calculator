import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react'

export const EquationSolver = () => {
  const [ currVal, setCurrVal ] = useState("0");
  const [ operator, setOperator ] = useState(null);
  const [ prevVal, setPrevVal ] = useState(null);
  
  handlePress = (type, value) => {
    if(type==='number') {
      setCurrVal(`${currVal}${value}`)
    }
    
    if(type === "clear") {

    }

    if(type === "equal") {
    }

    if(operator === "+") {

    }

    if(operator === "/") {

    }

    if(operator === "-") {

    }

    if(operator === "*") {

    }

  }
  return ( <Text>Hello, I am your Calc!</Text> )

}
