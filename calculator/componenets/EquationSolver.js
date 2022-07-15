import React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const EquationSolver = () => {
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

    return <Text>Hello, bye</Text>

}

