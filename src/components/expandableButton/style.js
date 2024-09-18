import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 50,
      right: 30,
      alignItems: 'center',
    },
    mainButton: {
      width: 80,
      height: 80,
      borderRadius: 30,
      backgroundColor: '#dfdfdf',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondaryButton: {
      position: 'absolute',
      bottom: 0,
    },
    button: {
      width: 60,
      height: 60,
      borderRadius: 25,
      backgroundColor: '#dfdfdf',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });