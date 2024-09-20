import React, { useState, useEffect, useRef } from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import styles from "./style"
import { Camera } from "expo-camera/legacy"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Modal from "../Modal"

export default function(){

    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.front)
    const [hasPermission, setHasPermission] = useState(null)
    const [capturedPhoto, setCapturedPhoto] = useState(null)

    useEffect(()=> {
        (async ()=> {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted") 
        })()
    }, [])

    if (hasPermission === null){
        return <View />
    }

    if (hasPermission === false){
        return <Text>Acesso Negado!</Text>
    }

    const handleType = ()=> {
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front: Camera.Constants.Type.back)
    }

    const takePhoto = async ()=> {
        if (camRef){
            const data = await camRef.current.takePictureAsync()
            setCapturedPhoto(data.uri)
            setOpen(true)
        }
    }

    return (
        <SafeAreaView style={styles.containerCamera}>
            <Camera type={type} style={styles.camera} ref={camRef}>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={[styles.cameraButton, styles.cameraButtonLeft]} onPress={handleType}>
                        <FontAwesome name="exchange"  size={30} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cameraButton, styles.cameraButtonRight]} onPress={takePhoto}>
                        <FontAwesome name="camera"  size={30} color="#E83199"/>
                    </TouchableOpacity>
                </View>
            </Camera>

            {/* add modal to show photo */}
            <Modal open={false} capturedPhoto={capturedPhoto}/>
            
        </SafeAreaView>
    )
}