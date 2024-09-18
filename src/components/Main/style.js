
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonPlus: {
        backgroundColor: "#D9D9D9",
        width: 80,
        height: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 30
    },
    textButtonPlus: {
        fontSize: 30,
        color: "#555"
    },
    containerButtonsCamera: {
        width: "100%",
        height: "100%",
        flex: 1,
        position: "absolute",
        backgroundColor: "#0005",
        gap: 20
    },
    containerButton: {
        flexDirection: "row",
        gap: 10,
    },
    descButton: {
        width: 150,
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: "center",
        backgroundColor: "#dfdfdf",
        color: "#555",
    },
    buttonCamera: {
        width: 60,
        height: 60,
        backgroundColor: "#dfdfdf",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
})