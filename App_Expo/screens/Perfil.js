import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Alert, BackHandler } from 'react-native'
import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { selectAdmin } from '../api';
import Session from '../components/Session';


var { height } = Dimensions.get('window');
var box_count = 1;
var box_height = height / box_count;

var { width } = Dimensions.get('window');
var box_count = 1;
var box_width = width / box_count;

export const Perfil = () => {
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

  const renderItem = ({ item }) => {

    const salir = () => {

      Alert.alert('¿ESTÁS SEGURO SALIR DE LA APLICACIÓN?', `¡Nos vemos pronto! ${item.AdNombre}`, [
        {
          text: 'Cancelar',
          onPress: () => console.log('Acción cancelada'),
          style: 'cancel',
        },
        { text: 'Salir', onPress: () => BackHandler.exitApp() },
      ]);
    }

    return (
      <View style={styles.container_config}>
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
            <TouchableOpacity onPress={salir}>
              <Ionicons name="md-log-out-outline" size={62} color="red" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }



  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.idAdmin + ''}
        renderItem={renderItem}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  idtext: {
    fontSize: 35,
    color: '#01A7C2', backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  container_config: {
    flex: 1,
    backgroundColor: "#01A7C2",
    alignItems: "center",
    textAlign: "center"
  },
  container_perfil: {
    backgroundColor: "#57A8AA",
    backgroundColor: "#EAEBED",
    borderRadius: 20,
    marginTop: 15,
    width: 350
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
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 5,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  text_mark: {
    color: "#01A7C2",
    fontSize: 26,

  },

  line_config: {
    color: "#01A7C2",
    fontSize: 20,
  },
});


export default Perfil

