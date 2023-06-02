import { StyleSheet, View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { React, useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export const UploadCloudinaryProduct = ({ onImageSelected, image, com }) => {
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
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (image !== '') {
      setSelectedImage({ localUri: '', remoteUri: image });
    }
  }, [image]);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("El permiso de la cámara es requerido");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
    uploadImageToCloudinary(pickerResult.uri);
  };

  return (
    <TouchableOpacity onPress={openImagePickerAsync} disabled={com}>
      <Image
        source={{
          uri: selectedImage ? selectedImage.localUri || selectedImage.remoteUri : "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2022/05/descripcion-de-un-producto.png",
        }}
        style={styles.imageone}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageone: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 14
  }
});
