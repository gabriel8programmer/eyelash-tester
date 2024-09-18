import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from "./style"

const ExpandableButton = () => {
  const [expanded, setExpanded] = useState(false)
  const animation = useRef(new Animated.Value(0)).current

  const toggleExpand = () => {
    setExpanded(!expanded)
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const button1Style = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -90], // Distância que o botão 1 se moverá para cima
        }),
      },
    ],
  }

  const button2Style = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -160], // Distância que o botão 2 se moverá para cima
        }),
      },
    ],
  }

  return (
    <View style={styles.container}>
      {/* Botão 1 */}
      <Animated.View style={[styles.secondaryButton, button1Style]}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="camera" size={24} color="#555" />
        </TouchableOpacity>
      </Animated.View>

      {/* Botão 2 */}
      <Animated.View style={[styles.secondaryButton, button2Style]}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="image" size={24} color="#555" />
        </TouchableOpacity>
      </Animated.View>

      {/* Botão Principal */}
      <TouchableOpacity style={styles.mainButton} onPress={toggleExpand}>
        <FontAwesome name={expanded ? 'close' : 'plus'} size={24} color="#555" />
      </TouchableOpacity>
    </View>
  )
}

export default ExpandableButton
