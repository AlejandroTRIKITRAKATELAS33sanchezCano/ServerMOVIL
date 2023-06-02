import { AppState,View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Alert, BackHandler, Modal, Pressable, SafeAreaView  } from 'react-native'
import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { selectAdmin } from '../api';
import Session from '../components/Session';
import AwesomeAlert from 'react-native-awesome-alerts';
//import Constants from 'expo-constants';
//import { ExpoUpdates } from 'expo-updates';
//import { Updates } from 'expo';
var { height } = Dimensions.get('window');
var box_count = 1;
var box_height = height / box_count;

var { width } = Dimensions.get('window');
var box_count = 1;
var box_width = width / box_count;
export const Perfil = ({navigation}) => {
/*
  var { height } = Dimensions.get('window');
  var box_count = 1;
  var box_height = height / box_count;

  var { width } = Dimensions.get('window');
  var box_count = 1;
  var box_width = width / box_count;
*/
  const idadminB = Session.idadminB;
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const data = await selectAdmin(idadminB);
    console.log(data);
    setTasks(data);
  }

  useEffect(() => {
    loadTasks()
  }, [])
  const [showAlert, setShowAlert] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => {

    const salir = () => {

      Alert.alert('¡Nos vemos pronto!', ` ${item.AdNombre}`, [
        {
          text: 'Salir', onPress: () => BackHandler.exitApp()
        },
      ]);
    }
    const message = `¡Hasta la próxima! ${item.AdNombre}`
    return (
      <SafeAreaView style={styles.container_config}>
        <View style={styles.container_perfil}>
          <View style={styles.container_id}>
            <Text style={styles.text_id}>ID</Text>
          </View>
          <View style={styles.container_ln}>
            <Text style={styles.idtext}>{item.idAdmin}</Text>
            <Text style={styles.line_config}>________________________________</Text>
          </View>
          <View style={styles.container_info}>
            <Text style={styles.text_mark}>Apellido paterno:</Text>
            <Text style={styles.text_info}>{item.AdAppat}</Text>
          </View>
          <View style={styles.container_info}>
            <Text style={styles.text_mark}>Apellido materno:</Text>
            <Text style={styles.text_info}>{item.AdApmat}</Text>
          </View>
          <View style={styles.container_info}>
            <Text style={styles.text_mark}>Nombre(s):</Text>
            <Text style={styles.text_info}>{item.AdNombre}</Text>
          </View>
        </View>
        <View style={styles.container_icn}>
          <View style={styles.container_icn2}>

            <View style={styles.Background2}>
              <Pressable
                style={[styles.buttonOpen]}
                onPress={() => setShowAlert(!showAlert)}>
                <Ionicons name="md-log-out-outline" size={62} color="red" />
              </Pressable>
            </View>
          </View>
        </View>
        <AwesomeAlert
          show={showAlert}

          title="¿Seguro de salir de la aplicación?"
          titleStyle={{ fontSize: 28, color: "red", alignItems: 'center', justifyContent: "center", textAlign: 'center' }}

          message={message}
          messageStyle={{ color: "black", fontSize: 20, alignItems: "center", justifyContent: "center" }}

          showCancelButton={true}
          cancelText="Cancelar"
          cancelButtonStyle={{ backgroundColor: "red", width: 115, justifyContent: "center", alignItems: "center", borderRadius: 15 }}
          cancelButtonTextStyle={{ fontSize: 19 }}
          onCancelPressed={() => {
            console.log('Cancel button pressed')
            setShowAlert(false)
          }}

          showConfirmButton={true}
          confirmText="Salir"
          confirmButtonStyle={{ backgroundColor: "blue", width: 85, justifyContent: "center", alignItems: "center", borderRadius: 15 }}
          confirmButtonTextStyle={{ fontSize: 19 }}
          onConfirmPressed={() => {
             //Updates.reloadAsync();
             navigation.navigate('Inicio', { shouldResetFields: true });
             BackHandler.exitApp();
             setShowAlert(false);
            /*
            //Updates.reloadAsync();
            navigation.navigate("Inicio")
            BackHandler.exitApp();
            setShowAlert(false);
            */
          }}

          closeOnTouchOutside={false} // default true
          closeOnHardwareBackPress={false} // default true
          onDismiss={() => console.log('Dismiss Called.')}
        />
      </SafeAreaView>
    )
  }



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.idAdmin + ''}
        renderItem={renderItem}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  idtext: {
    fontSize: 35,
    color: '#01A7C2',
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 5,
  },
  container_config: {
    flex: 1,
    backgroundColor: "#01A7C2",
    alignItems: "center",
    height: box_height,
    justifyContent: "center",
    textAlign: "center"
  },
  container_perfil: {
    alignItems: "center",
    backgroundColor: "#57A8AA",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 15,
    width: 350,
    justifyContent: "center",
    textAlign: "center"
  },

  container_id: {
    padding: 0,
    marginTop: 15,
    alignItems: "center",
    textAlign: "center"
  },

  container_info: {
    alignItems: "center",
    textAlign: "center"
  },

  container_ln: {
    padding: 10,
    alignItems: "center",
    textAlign: "center"
  },

  container_icn: {
    padding: 10,
    alignItems: "center",
    textAlign: "center"
  },

  container_icn2: {
    backgroundColor: "white",
    borderRadius: 45,
    height: 80,
    width: 80,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  text_id: {
    color: "#01A7C2",
    fontSize: 50,

  },

  text_info: {
    color: "#01A7C2",
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 5,
  },

  text_mark: {
    color: "#01A7C2",
    fontSize: 26,

  },

  line_config: {
    color: "#01A7C2",
    fontSize: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 45,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  button: {
    margin: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonClose2: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  modalText: {
    color: 'red',
    marginBottom: 15,
    fontSize: 35,
    textAlign: 'center',
  },
  modalTextcon: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  contenedorBotones: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  containerBackground: {
    backgroundColor: '#016574',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Background2: {
    backgroundColor: 'white',
    borderRadius: 45
  }
});


export default Perfil
