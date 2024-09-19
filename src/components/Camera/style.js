
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    containerCamera: {
        flex: 1,
    },
    camera: {
        flex: 1
    },
    containerButtons: {
        flex: 1
    },
    cameraButton: {
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        position: "absolute",
        bottom: 50
    },
    cameraButtonLeft: {
        backgroundColor: "#E83199",
        left: 50
    },
    cameraButtonRight: {
        backgroundColor: "#fff",
        right: 50
    },
})