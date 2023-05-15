import { StyleSheet, View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { React, useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Cloudinary } from 'cloudinary-react-native';
{/*}
const uploadImageToCloudinary = async (localUri) => {
    try {
        const cloudinary = new Cloudinary({
            cloud_name: 'dkhzhsqzh',
            api_key: '736588111363482',
            api_secret: 'hxWc9M_dG-WHPnU0S04KW2MM1m0',
        });
        const response = await Cloudinary.upload(localUri);
        console.log(response);
        const imageUrl = response.secure_url; // Obtén el enlace de la imagen
        console.log(`LA URL DE LA IMAGEN DE CLODINARY ES: ${imageUrl}`);
        // Aquí puedes manejar la respuesta de Cloudinary después de subir la imagen
    } catch (error) {
        console.error(error);
        // Aquí puedes manejar cualquier error que ocurra durante la subida
    }
};



const uploadImageToCloudinary = async (localUri) => {
    try {
      const cloudinary = new Cloudinary({
        cloud_name: 'dkhzhsqzh',
        api_key: '736588111363482',
        api_secret: 'hxWc9M_dG-WHPnU0S04KW2MM1m0',
      });
  
      const response = await cloudinary.unsignedUpload(localUri, {
        unsigned: 'gestick',
      });
  
      const imageUrl = response.secure_url;
      console.log('URL de la imagen en Cloudinary:', imageUrl);
  
      // Aquí puedes realizar la lógica para guardar la URL en tu base de datos
  
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

const uploadImageToCloudinary = async (localUri) => {
    try {
      const cloudinary = new Cloudinary({
        cloud_name: 'dkhzhsqzh',
        api_key: '736588111363482',
        api_secret: 'hxWc9M_dG-WHPnU0S04KW2MM1m0'
      });
  
      const response = await cloudinary.uploader.upload(localUri);
  
      const imageUrl = response.secure_url;
      console.log('URL de la imagen en Cloudinary:', imageUrl);
  
      // Aquí puedes realizar la lógica para guardar la URL en tu base de datos
  
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };
{*/}

import axios from 'axios';

export const UploadCloudinary = ({ onImageSelected }) => {

  const uploadImageToCloudinary = async (localUri) => {
    try {
      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dkhzhsqzh/image/upload';
      const uploadPreset = 'gestick';

      const formData = new FormData();
      formData.append('file', { uri: localUri, name: 'image.jpg', type: 'image/jpeg' });
      formData.append('upload_preset', uploadPreset);

      const response = await axios.post(cloudinaryUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const imageUrl = response.data.secure_url;
      onImageSelected(imageUrl);
      // console.log('URL de la imagen en Cloudinary:', imageUrl);

      // Aquí puedes realizar la lógica para guardar la URL en tu base de datos

    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    //console.log(`El id del empleado en el UploadCloudinary es: ${idEmpleado}`)
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("El permiso de la cámara es requerido");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === "web") {
      let remoteUri = await uploadAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
      uploadImageToCloudinary(pickerResult.uri); // Agrega esta línea

    } else {
      setSelectedImage({ localUri: pickerResult.uri });
      uploadImageToCloudinary(pickerResult.uri);
    }
    //uploadImageToCloudinary(pickerResult.uri); // Agrega esta línea
  };
  return (
    <TouchableOpacity onPress={openImagePickerAsync} >
      <Image
        source={{
          uri:
            selectedImage !== null
              ? selectedImage.localUri
              : "https://cdn-icons-png.flaticon.com/512/912/912265.png",
        }}
        style={styles.imageone}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  imageone: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 14
  }
});

export default UploadCloudinary