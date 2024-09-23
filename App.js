import React, { useState, useEffect, useRef } from "react"
import { StyleSheet, View, Dimensions, Image, TouchableOpacity, Modal, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//get width and height of the screen
const { width, height } = Dimensions.get("window")

export default function App() {

    const [loadedCamera, setLoadedCamera] = useState(false)
    const [cameraData, setCameraData] = useState(null)

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require("./src/assets/logo.png")} style={styles.imgLogo}></Image>
            </View>

            <View style={styles.main}>
                <TouchableOpacity style={styles.mainButtonChoose}>
                    <FontAwesome name="camera" color="#555" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButtonChoose}>
                    <FontAwesome name="image" color="#555" size={30} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        width: "100%",
        backgroundColor: "#E83199",
        alignItems: "center",
        padding: width * 0.1,
    },
    imgLogo: {
        width: width * 0.35,
        height: height * 0.15,
    },
    main: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        paddingVertical: 50,
    },
    mainButtonChoose: {
        width: 70,
        height: 70,
        backgroundColor: "#dfdfdf",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 3, // Sombra no Android
        shadowColor: "#000", // Sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
})