import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Alert, FlatList,ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from "react";
import { Feather } from '@expo/vector-icons';
import { getEmpUrl } from '../api';

const ComponenteEmpleado = ({ navigation, task, handleDelete }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const imageUrl = await getEmpUrl(task.idEmpleado);
        if (imageUrl && imageUrl.length > 0) {
          setImageUrl(imageUrl[0].EmUrlimg);
        }        //console.log(Object.keys(imageUrl));
        setLoading(false);

        //console.log(`LA URL DENTRO DEL FETCH ES: ${imageUrl[0].EmUrlimg}`);
      } catch (error) {
        console.log("Error al obtener la URL de la imagen:", error);
        setLoading(false);

      }
    };
    fetchImageUrl();
  }, [task.idEmpleado]);

  //console.log(`LA URL DENTRO DE COMPONENTE ES: ${url}`)
  const alertborrar = () =>
    Alert.alert('¿ESTÁS SEGURO DE BORRAR A TU EMPLEADO?', 'Si borras al empleado no podrás recuperarlo', [
      {
        text: 'Cancelar',
        onPress: () => console.log(`Operación cancelada`),
        style: 'cancel',
      },
      { text: 'Borrar', onPress: () => handleDelete(task.idEmpleado) },
    ]);
  return (
    <View style={styles.viewone}>
      <View style={styles.viewtwo}>
 
      {loading ? (
          <ActivityIndicator size="small" color="black" />
        ) : imageUrl ? (
          <TouchableOpacity disabled={true}>
            <Image source={{ uri: imageUrl }} style={styles.imageone} />
          </TouchableOpacity>
        ) : (
          <Text>No hay imagen disponible</Text>
        )}
        <View style={styles.viewthree}>
          <Feather name="edit-2" size={24} color='black'
            onPress={() => navigation.navigate("NuevoEmpleado", { idEmpleado: task.idEmpleado })}
          />
        </View>

        <View style={styles.viewfor}>
          <Feather name="trash-2" size={24} color='#AB0000'
            onPress={alertborrar}
          />
        </View>
      </View>

      <View style={styles.viewid}>
        <Text style={styles.text}>ID:</Text>
      </View>

      <View style={styles.viewidinput}>

        <Text style={[styles.center, styles.textrespuestabd]}>{task.idEmpleado}</Text>

      </View>

      <View style={styles.viewcontraseña}>
        <Text style={styles.text}>Nombre:</Text>
      </View>


      <View style={styles.viewcontraseñainput}>
        <Text style={[styles.center, styles.textrespuestabd]}> {task.EmNombre} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    color: '#818181'
  },
  textrespuestabd: {
    color: 'black'
  },
  alertmsj: {
    height: 30,
    width: 120,
    textAlign: 'center',
    justifyContent: 'center'
  },
  viewid: {
    position: 'absolute',
    left: 170,
    top: 30,
  },
  viewcontraseña: {
    position: 'absolute',
    left: 155,
    top: 75,
  },
  viewidinput: {
    position: 'absolute',
    left: 235,
    top: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 30,
    width: 120
  },
  viewcontraseñainput: {
    position: 'absolute',
    left: 235,
    top: 70,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 30,
    width: 120
  },
  viewone: {
    backgroundColor: '#D5F7F8',
    borderRadius: 13,
    width: 365,
    height: 150,
    margin: 15,
  },
  viewtwo: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 135,
    height: 123,
    margin: 15,
    alignItems: 'center'
  },
  viewthree: {
    position: 'absolute',
    left: 210,
    top: 100,
    width: 55,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 17,
    alignItems: 'center'
  },
  viewfor: {
    position: 'absolute',
    left: 280,
    top: 100,
    width: 55,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 17,
    alignItems: 'center'
  },
  imageone: {
    width: 110,
    height: 100,
    margin: 10,
    borderRadius: 14
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
}
);

export default ComponenteEmpleado

{/*<Button
          title="ir"
          onPress={() => navigation.navigate("Actualizar")}
          style={styles.butone}
        /> */}

{/* <Pressable style={styles.button} onPress={() => navigation.navigate("Actualizar")}>
          <Text> uniu </Text>
        </Pressable> */}