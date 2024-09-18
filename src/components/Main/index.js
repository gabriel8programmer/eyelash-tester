import React from "react"
import { TouchableOpacity, View, Text } from "react-native"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"
import ButtonsCamera from "../expandableButton"
import ExpandableButton from "../expandableButton"

export default function Main(){
    return (
        <View style={styles.main}>
            <ExpandableButton></ExpandableButton>
        </View>
    )
}