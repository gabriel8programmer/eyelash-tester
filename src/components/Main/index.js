import React from "react"
import { TouchableOpacity, View, Text } from "react-native"
import styles from "./style"
import Fontawesome from "@expo/vector-icons"

export default function Main(){
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.buttonPlus}>
                <Text style={styles.textButtonPlus}>+</Text>
            </TouchableOpacity>
        </View>
    )
}