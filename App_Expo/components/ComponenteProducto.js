import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Alert, IconButton } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from "react";

const ComponenteProducto = ({ navigation, producto }) => {
    return (
        <View style={styles.container_inv}>
            <View style={styles.container_bs1}>
                <View style={styles.container_img}>
                    <TouchableOpacity onPress={() => navigation.navigate("Información Producto", { idProducto: producto.idProductos })}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/5609/5609501.png"
                            }}
                            style={styles.img_prod}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container_bs2}>
            <View style={styles.container_icon}>
                    <TouchableOpacity onPress={() => navigation.navigate("NuevoProducto")}>
                        <Feather style={styles.icon_edit} name="edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.container_txt}>
                    <Text style={styles.txt_info}>{producto.PrNombre}</Text>
                </View>
                <View style={styles.container_icon}>
                    <TouchableOpacity onPress={() => navigation.navigate("NuevoProducto")}>
                        <Feather style={styles.icon_edit} name="trash" size={24} color="red" />
                    </TouchableOpacity>
                </View>
               
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_inv: {
        flex: 1,
        backgroundColor: "#EAEBED",
        width: 250,
        height: 250,
        borderRadius: 10,
        marginLeft: 80,
        marginTop: 15,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        elevation: 10,
    },
    container_bs1: {
        width: 250,
        height: 200,
    },
    container_bs2: {
        width: 250,
        height: 50,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    container_img: {
        width: 200,
        height: 170,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        marginHorizontal: 25,
        borderRadius: 10,
        alignItems: "center",
    },
    container_num: {
        width: 60,
        height: 50,
        marginLeft: 0,
        alignItems: "center",
    },
    container_icon: {
        width: 60,
        height: 50,
        alignItems: "center",
    },
    container_txt: {
        width: 130,
        height: 50,
        alignItems: "center",
    },
    img_prod: {
        width: 200,
        height: 170,
        borderRadius: 10,
    },
    txt_info: {
        fontFamily: 'Roboto',
        margin: 10,
        borderRadius: 10,
    },
    icon_edit: {
        width: 30,
        height: 30,
        margin: 5,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingLeft: 4,
        paddingTop: 3,
    },
    num_info: {
        width: 30,
        height: 20,
        fontFamily: 'Roboto',
        margin: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        textAlign: 'center'
    },
});

export default ComponenteProducto
