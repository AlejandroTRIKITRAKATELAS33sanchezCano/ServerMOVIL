import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
import React from 'react'

export const ImageComponentProduct = ({ imageUrl, isTwoColumns }) => {
    if (imageUrl) {
        return (
            <TouchableOpacity disabled={true}>
                <Image source={{ uri: imageUrl }} style={isTwoColumns ? styles.imagetwo : styles.imageone} />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity disabled={true}>
                <Text>No hay imagen disponible</Text>
            </TouchableOpacity>
        );
    }
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    imageone: {
        //width: 200,
        //height: 165,
        width: windowWidth * 0.41,
        height: windowHeight * 0.17,
        margin: 10,
        borderRadius: 14
    },
    imagetwo:{
        width: windowWidth * 0.23,
        height: windowHeight * 0.13,
        margin: 10,
        borderRadius: 14
    }
});

export default ImageComponentProduct