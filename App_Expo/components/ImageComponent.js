import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export const ImageComponent = ({ imageUrl }) => {
    //console.log(`LA URL ES: ${imageUrl}`)
   
    if (imageUrl) {
        return (
            <TouchableOpacity disabled={true}>
                <Image source={{ uri: imageUrl }} style={styles.imageone} />
            </TouchableOpacity>
        );
    } else {
        return (
            <Text>No hay imagen disponible</Text>
        );
    }
}
const styles = StyleSheet.create({
    imageone: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 14
    }
});

export default ImageComponent