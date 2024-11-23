

import { View, Image } from 'react-native'
import styles from './styles'

export default () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/img/logo.png')}
            />
        </View>
    )
}