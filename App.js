
import { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as FaceDetector from "expo-face-detector"

//components
import Camera from './src/components/Camera';

let idCounter = new Date().getTime()

const eyelashes = [
  {
    id: (++idCounter).toString(),
    imageUri: require('./src/assets/img/eyelash.png')
  },
  {
    id: (++idCounter).toString(),
    imageUri: require('./src/assets/img/eyelash.png')
  },
  {
    id: (++idCounter).toString(),
    imageUri: require('./src/assets/img/eyelash.png')
  },
  {
    id: (++idCounter).toString(),
    imageUri: require('./src/assets/img/eyelash.png')
  },
  {
    id: (++idCounter).toString(),
    imageUri: require('./src/assets/img/eyelash.png')
  },
  {
    id: (++idCounter).toString(),
    imageUri: require('./src/assets/img/eyelash.png')
  },
];


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [faces, setFaces] = useState([])

  const pickImage = async () => {
    // Pede permissão para acessar as fotos
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("É necessária permissão para acessar as fotos!");
      return;
    }

    // Abre o seletor de imagens
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  useEffect(() => {

    (async () => {

      if (selectedImage) {
        const detectFaces = await FaceDetector.detectFacesAsync(selectedImage, {
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
          tracking: true,
        })
        console.log(detectFaces.faces)
      }

    })()

  }, [selectedImage])

  return (
    <View style={styles.container}>
      { /** header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Provador Virtual</Text>
      </View>

      <View style={styles.editor}>

        {!selectedImage ?

          <TouchableOpacity onPress={pickImage} style={styles.pickButton}>
            <Text style={styles.pickButtonText}>Pegar uma imagem</Text>
          </TouchableOpacity>
          :
          <View style={styles.containerEditor}>

            <View style={styles.containerImage}>
              <Image source={{ uri: selectedImage }} style={styles.image} />
              {/* <WebView source={{ uri: image }} style={{ flex: 1 }} /> */}
            </View>

            <FlatList
              style={styles.eyelashesList}
              data={eyelashes}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.eyelashButton}>
                    <Image source={item.imageUri} style={styles.eyelashImage} />
                  </TouchableOpacity>
                )
              }}
            />

          </View>
        }


      </View>

    </View>
    // <Camera />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#E83199',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 17
  },
  editor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickButton: {
    backgroundColor: '#E83199',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
  },
  pickButtonText: {
    color: '#fff',
    textTransform: 'uppercase'
  },
  containerEditor: {
    flex: 1
  },
  containerImage: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  eyelashesList: {
    flexDirection: 'row',
    flexGrow: 0,
    padding: 20,
  },
  eyelashButton: {
    width: 100,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    borderRadius: 20,
    marginRight: 20
  },
  eyelashImage: {
    width: 50,
    height: 20
  },
});

