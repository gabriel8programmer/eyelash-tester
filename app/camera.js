import React, { useEffect, useState, useRef } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"

export default () => {

    const camRef = useRef(null)
    const [hasCameraPermission, setHasCameraPermission] = useState(null)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.front)
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [open, setOpen] = useState(false)

    //request permission of the user for to use its camera
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasCameraPermission(status === "granted")
        })()
    }, [])

    if (hasCameraPermission === null) {
        return <View />
    }

    if (hasCameraPermission === false) {
        return <Text>Acesso Negado!</Text>
    }

    const handleFlipCamera = () => {
        setCameraType(cameraType === Camera.Constants.Type.front ?
            Camera.Constants.Type.back :
            Camera.Constants.Type.front
        )
    }

    const handleTakePhoto = async () => {
        if (camRef.current) {
            const data = await camRef.current.takePictureAsync()
            setCapturedPhoto({ uri: data.uri })
            setOpen(true)  // Open modal when photo is captured
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera ref={camRef} type={cameraType} style={styles.camera}>
                <View style={styles.cameraButtons}>
                    <TouchableOpacity style={[styles.cameraButton, styles.cameraButtonLeft]} onPress={handleFlipCamera}>
                        <FontAwesome name="exchange" size={30} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cameraButton, styles.cameraButtonRight]} onPress={handleTakePhoto}>
                        <FontAwesome name="camera" size={30} color="#E83199" />
                    </TouchableOpacity>
                </View>
            </Camera>

            {capturedPhoto && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={open}
                >
                    <View style={styles.contentModal}>
                        <TouchableOpacity style={styles.buttonClose} onPress={() => { setOpen(false) }}>
                            <FontAwesome name="close" color="#fff" size={50} />
                        </TouchableOpacity>
                        <Image source={{ uri: capturedPhoto.uri }} style={styles.imgPhoto} />
                    </View>
                </Modal>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
    },
    cameraButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    cameraButton: {
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        backgroundColor: "#E83199",
        elevation: 5, // Para sombra no Android
        shadowColor: "#000", // Para sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    cameraButtonLeft: {
        backgroundColor: "#E83199", // Botão de troca de câmera
    },
    cameraButtonRight: {
        backgroundColor: "#fff", // Botão de tirar foto
    },
    contentModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Fundo escurecido
    },
    imgPhoto: {
        width: "90%",
        height: "70%",
        borderRadius: 20,
    },
    buttonClose: {
        position: "absolute",
        top: 30,
        right: 20,
        zIndex: 1,
    },
})