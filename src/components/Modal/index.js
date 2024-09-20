import React, { useState } from "react"
import { View, Modal, TouchableOpacity } from "react-native"
import styles from "./style"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function(props){

    const [open, setOpen] = useState(props.open)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
        >
            <View style={styles.contentModal}>
                <TouchableOpacity style={styles.buttonClose} onPress={()=> { setOpen(false) }}>
                    <FontAwesome name="close" color="#fff" size={50}/>
                </TouchableOpacity>
                <Image source={{ uri: props.capturedPhoto }} style={styles.imgPhoto} />
            </View>
        </Modal>
    )
}