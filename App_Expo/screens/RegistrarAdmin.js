import { Alert, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { GeneraridAdmin } from '../components/GenerarAdminid';
import { saveAdmin } from '../api';

export const RegistrarAdmin = ({ navigation }) => {
  const [admin, setAdmin] = useState({
    idAdmin: '',
    AdNombre: '',
    AdAppat: '',
    AdApmat: '',
    AdEmail:'',
    AdContrasenna: ''
  })

  const handleChange = (name, value) => {
    setAdmin({ ...admin, [name]: value });
  };

  const asign = async () => {
    const idNewAdmin = await GeneraridAdmin();
    await handleChange('idAdmin', idNewAdmin)
  }
  const handleSubmit = async () => {
    try {
      await saveAdmin(admin);
      Alert.alert(
        `Este es tu ID: ${admin.idAdmin} y tu contraseña: ${admin.AdContrasenna}`,
        'Si olvidas tu ID o tu contraseña tendrás que contactar a soporte técnico para su recuperación',
        [
          {
            text: 'Ok',
          },
        ]
      )
      navigation.navigate("Inicio")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.centeredView}>
      <Text style={styles.gestickTitle}>GESTICK</Text>
      <View style={styles.secondcontainer}>
        <Text style={styles.titles}>Registro</Text>
        <TextInput
          style={styles.inputNombre}
          placeholder="NOMBRE"
          onChangeText={(text) => handleChange('AdNombre', text)}
        />
        <TextInput
          style={styles.inputApPa}
          placeholder="APELLIDO PATERNO"
          onChangeText={(text) => handleChange('AdAppat', text)}
        />
        <TextInput
          style={styles.inputApMa}
          placeholder="APELLIDO MATERNO"
          onChangeText={(text) => handleChange('AdApmat', text)}
        />
        <TextInput
          style={styles.inputMail}
          placeholder="EMAIL"
          onChangeText={(text) => handleChange('AdEmail', text)}
        />
        <TextInput
          style={styles.inputcontraseña}
          placeholder="CONTRASEÑA"
          onChangeText={(text) => handleChange('AdContrasenna', text)}
          secureTextEntry={true}
          onFocus={() => asign()}
        />
        <View style={styles.Pressablecontainer}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={handleSubmit}
          >
            <Text style={styles.textStyle}>Crear</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '90%', marginTop: 20 }}>
        <Text style={styles.registrate}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Inicio") }}><Text style={{ fontSize: 15, fontWeight: '600', justifyContent: 'center', textAlign: 'center', color: '#00A2E8' }}>Inicia sesión</Text></TouchableOpacity>
      </View>
    </View>
  )
}

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
  inputApPa: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10,
    marginBottom: 20
  },
  inputApMa: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10,
    marginBottom: 20
  },
  inputMail: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10,
    marginBottom: 20
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
  inputNombre: {
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
    marginBottom: 10
  },
  secondcontainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 285,
    height: 485,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#E3E8EE'
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
});

