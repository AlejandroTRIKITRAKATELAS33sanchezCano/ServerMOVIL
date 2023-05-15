import React, { useEffect, useState } from 'react'
import { View, Button, Text, StyleSheet, Alert, Modal, Pressable, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from '../navigation/TabNavigator';
import Inventario from "./Inventario";
import Bienvenida from "../screens/Bienvenida";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackNavigator } from "../navigation/StackNavigator";
import { Component } from 'react/cjs/react.production.min';
import { getTasks } from '../api';
import { TaskList } from '../components/TaskList';
import { selectAdmin } from '../api';
import {RegistrarAdmin} from './RegistrarAdmin'
const Stack = createStackNavigator();

const Inicio = ({ navigation }) => {

  const [granted, setGranted] = useState(false);
  const [contrasenna, setContrasenna] = useState(null);
  const [adminid, setAdminid] = useState(null);
  const [adminName, setAdminName] = useState(null);

  const compare = async () => {
    const idAdmin = adminid;
    const pass = contrasenna;
    console.log(`admin: ${idAdmin} contrasenna: ${pass}`)
    if (idAdmin === null || pass === null) {
      Alert.alert(
        '¡Cuidado!',
        'Tienes que llenar todos los datos ',
        [
          {
            text: 'Ok',
            //onPress: () => Alert.alert('Cancel Pressed'),
            //style: 'cancel',
          },
        ]
      )
    } else {
      const data = await selectAdmin(idAdmin);
      //console.log(`EL idAdmin en el else es: ${idAdmin} y el data es ${data[0].idAdmin } and ${data[0].AdContrasenna}`)
      if (idAdmin == data[0].idAdmin && pass == data[0].AdContrasenna) {
        setGranted(true)
        setAdminName(data[0].AdNombre)
        console.log(`El AdminName: ${setAdminName}`)
        setModalVisible(true);
      } else {
        Alert.alert(
          '¡Cuidado!',
          'El id o la contraseña son incorrectos',
          [
            {
              text: 'Ok',
            },
          ]
        )
      }
    }
  }



  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Text style={styles.gestickTitle}>GESTICK</Text>
      <View style={styles.secondcontainer}>
        <Text style={styles.titles}>Inicio Sesión</Text>
        <TextInput
          style={styles.inputid}
          placeholder="ID"
          keyboardType="numeric"
          onChangeText={(text) => setAdminid(text)}
        />
        <TextInput
          style={styles.inputcontraseña}
          placeholder="CONTRASEÑA"
          secureTextEntry={true}
          onChangeText={(text) => setContrasenna(text)}
        />
        <View style={styles.Pressablecontainer}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              compare();
            }
            }
          >
            <Text style={styles.textStyle}>Iniciar</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '90%', marginTop: 20 }}>
        <Text style={styles.registrate}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("RegistrarAdmin")}}><Text style={{ fontSize: 15, fontWeight: '600', justifyContent: 'center', textAlign: 'center', color: '#00A2E8' }}>Registrate</Text></TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titles}>Términos y Condiciones:</Text>
            <Text style={styles.textoaviso}>Tus datos serán usados con fines informativos y para resolución de bugs que se presenten. Ninguno de tus datos será filtrado fuera de la aplicación.</Text>

            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => { setModalVisible(!modalVisible), navigation.navigate("Bienvenida", { adminid:adminid, adminName: adminName })}}
             >
                <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  registrate: {
    fontSize: 15,
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black'
  },
  gestickTitle: {
    fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    fontSize: 45,
    fontWeight: '900',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 30,
    color: '#00A2E8'
  },
  textoaviso: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  Pressablecontainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  inputcontraseña: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10,
    marginBottom: 20
  },
  inputid: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10

  },
  titles: {
    fontSize: 25,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 15
  },
  secondcontainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 285,
    height: 285,
    padding: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#E3E8EE'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#01A7C2',
    height: 40,
    width: 80
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Inicio


/*  #01A7C2  azul gestick */
/*  #1a1a1a  back negro gestick */