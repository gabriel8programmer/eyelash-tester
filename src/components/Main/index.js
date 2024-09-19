import React from "react"
import { View, Text } from "react-native"
import styles from "./style"
import ExpandableButton from "../expandableButton"
import Camera from "../Camera/"

export default function Main(){

    const loadSearcherStorage = ()=> {

    }

    const loadCamera = ()=> {

    }

    return (
        <View style={styles.main}>
            <ExpandableButton 
                onChooseInternalStorage={loadSearcherStorage} 
                onChooseTakePhoto={loadCamera} 
            />

            {/* <Camera /> */}
        </View>
    )
}