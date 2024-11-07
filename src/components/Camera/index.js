
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera"

//style
import styles from "./styles"

export default () => {

    const device = useCameraDevice("front")
    const { hasPermission, requestPermission } = useCameraPermission()
    const [permission, setPermission] = useState(false)

    useEffect(() => {
        (async () => {
            const status = await requestPermission()
            setPermission(status)
        })()
    }, [])

    if (!permission) {
        <View style={styles.container}>
            <Text>Permissão para usar a câmera é necessária.</Text>
        </View>
    }

    if (!device) {
        <View style={styles.container}>
            <Text>Dispositivo de câmera não encontrado.</Text>
        </View>
    }

    return (
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
    )
}