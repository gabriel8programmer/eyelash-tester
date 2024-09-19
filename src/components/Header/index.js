import React from "react"
import { View, Image } from "react-native"
import styles from "./style"
import Logo from "../../assets/logo.png"

export default function Header(){
    return (
        <View style={styles.header}>
            <Image source={Logo} style={styles.imgLogo}/>
        </View>
    )
}