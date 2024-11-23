import React, { useState } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, Text } from 'react-native'
import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker'
import Header from './src/components/Header'

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Função para abrir câmera ou galeria
  const handleImageSelection = async (type: 'camera' | 'gallery') => {
    const options: CameraOptions & ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: type === 'camera',
    }

    const result =
      type === 'camera' ? await launchCamera(options) : await launchImageLibrary(options)
    processImageResult(result)
  }

  // Processa o resultado da captura ou seleção
  const processImageResult = (result: ImagePickerResponse) => {
    if (result.didCancel) {
      Alert.alert('Ação cancelada pelo usuário')
    } else if (result.errorMessage) {
      Alert.alert('Erro ao acessar a imagem', result.errorMessage)
    } else if (result.assets && result.assets.length > 0) {
      const photo: Asset = result.assets[0]
      setSelectedImage(photo.uri || null)
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.stage}>
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={styles.previewImage}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.placeholderText}>Carregue uma Imagem</Text>
        )}
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity
          onPress={() => handleImageSelection('camera')}
          style={styles.button}>
          <Image
            source={require('./src/assets/img/camera-icon.png')}
            style={styles.iconButton}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageSelection('gallery')}
          style={styles.button}>
          <Image
            source={require('./src/assets/img/galery-icon.png')}
            style={styles.iconButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bb9690',
  },
  containerButtons: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
  stage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E83199',
    borderRadius: 20,
  },
  iconButton: {
    width: '50%',
    height: '50%',
  },
})

export default App
