import React, { useEffect, useState } from 'react'
import { View, Button, Text, StyleSheet, Alert, Modal, Pressable, TouchableOpacity, Dimensions, StatusBar, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { selectAdmin } from '../api';
import { Toaster } from '../components/toaster';
import AwesomeAlert from 'react-native-awesome-alerts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../components/useTogglePasswordVisibility';

const Stack = createStackNavigator();

const Inicio = ({ navigation, route }) => {

  const [granted, setGranted] = useState(false);
  const [contrasenna, setContrasenna] = useState(null);
  const [adminid, setAdminid] = useState(null);
  const [adminName, setAdminName] = useState(null);
  const [isToasterDisplayed, setIsToasterDisplayed] = React.useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const compare = async () => {
    const idAdmin = adminid;
    const pass = contrasenna;
    //const adminName = adminName;
    console.log(`admin: ${idAdmin} contrasenna: ${pass}`)
    //console.log(`EL NAME DENTRO DE INICIO ES: ${adminName}`);
    if (idAdmin === null || isNaN(idAdmin) || pass === null) {
      setShowAlert(!showAlert)
    } else {
      //console.log(`EL idAdmin en el else es: ${idAdmin} y el data es ${data[0].idAdmin } and ${data[0].AdContrasenna}`)
      const data = await selectAdmin(idAdmin);
      //console.log(`LOS VALORES DE DATA: id ${data[0].idAdmin} y contraseña: ${data[0].AdContrasenna}`)
      //setShowAlert2(!showAlert2);
      console.log('ENTRÓ A DONDE NO DEBERÍA')
      if (idAdmin == data[0].idAdmin && pass == data[0].AdContrasenna) {
        //console.log(`SET ${data[0].AdNombre}`)
        setGranted(true)
        setAdminName(data[0].AdNombre)
        //console.log(`El AdminName: ${setAdminName}`)
        //console.log(`EL NOMBRE SET ES: ${adminName}`)
        navigation.navigate("Bienvenida", { adminid: data[0].idAdmin, adminName: data[0].AdNombre })

      } else {
        console.log('ES FALSO')
        setShowAlert2(!showAlert2)
      }

    }
  }

  const clearFields = () => {
    setAdminid('');
    setContrasenna('');
  }

  useEffect(() => {
    if (route.params?.shouldResetFields) {
      clearFields();
    }
  }, [route.params]);

  React.useEffect(() => {
    if (isToasterDisplayed) {
      const timer = setTimeout(() => setIsToasterDisplayed(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isToasterDisplayed]);


  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <StatusBar
        backgroundColor="#00A2E8" 
        barStyle="white" 
      />
      <Text style={styles.gestickTitle}>GESTICK</Text>
      {isToasterDisplayed && <Toaster />}
      <View style={styles.secondcontainer}>
        <Text style={styles.titles}>Inicio Sesión</Text>
        <TextInput
          style={styles.inputid}
          placeholder="ID"
          keyboardType="numeric"
          onChangeText={(text) => setAdminid(text)}
          value={adminid}
        />
        <View style={styles.row}>
          <TextInput
            style={styles.inputcontraseña}
            placeholder="CONTRASEÑA"
            secureTextEntry={passwordVisibility}
            onChangeText={(text) => setContrasenna(text)}
            value={contrasenna}
          />
          <Pressable onPress={handlePasswordVisibility} style={styles.iconpasswordview}>
            <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
          </Pressable>

        </View>
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
      <View style={{ width: windowWidth*0.6, marginTop: 20 }}>
        <Text style={styles.registrate}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => { setModalVisible(true) }}><Text style={{ fontSize: windowWidth*0.035, fontWeight: '600', justifyContent: 'center', textAlign: 'center', color: '#00A2E8' }}>Registrate</Text></TouchableOpacity>
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
            <Text style={styles.textoaviso}>Tus datos serán usados con fines informativos y para resolución de bugs que se presenten. Ninguno de tus datos será filtrado fuera de la aplicación. Al Crear tu cuenta aceptas los términos y condiciones de Gestick, para más información visita nuestrá página web. Gestick no se hace responsable por el mal uso de a aplicación.</Text>

            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => { setModalVisible(!modalVisible), navigation.navigate("RegistrarAdmin") }}
              >
                <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#00A2E8', padding: 10 }}>
        <TouchableOpacity
          onPress={() => { setIsToasterDisplayed(!isToasterDisplayed); }}>
          <Text style={{ fontSize: windowWidth*0.05, fontWeight: '600', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
            Sobre Nosotros
          </Text>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}

        title="¡Cuidado!"
        titleStyle={{ fontSize: 28, color: "red" }}

        message="Tienes que llenar todos los datos"
        messageStyle={{ color: "black", fontSize: 20, alignItems: "center", justifyContent: "center" }}

        showConfirmButton={true}
        confirmText="OK"
        confirmButtonStyle={{ backgroundColor: "blue", width: 85, justifyContent: "center", alignItems: "center", borderRadius: 15 }}
        confirmButtonTextStyle={{ fontSize: 19 }}
        onConfirmPressed={() => {
          console.log("Confirm button pressed")
          setShowAlert(false)
        }}
        closeOnTouchOutside={false} // default true
        closeOnHardwareBackPress={false} // default true
        onDismiss={() => console.log('Dismiss Called.')}
      />
      <AwesomeAlert
        show={showAlert2}

        title="¡Cuidado!"
        titleStyle={{ fontSize: 28, color: "red" }}

        message="El ID o la contraseña con incorrectos"
        messageStyle={{ color: "black", fontSize: 20, alignItems: "center", justifyContent: "center" }}

        showConfirmButton={true}
        confirmText="OK"
        confirmButtonStyle={{ backgroundColor: "blue", width: 85, justifyContent: "center", alignItems: "center", borderRadius: 15 }}
        confirmButtonTextStyle={{ fontSize: 19 }}
        onConfirmPressed={() => {
          console.log("Confirm button pressed")
          setShowAlert2(false)
        }}
        closeOnTouchOutside={false} // default true
        closeOnHardwareBackPress={false} // default true
        onDismiss={() => console.log('Dismiss Called.')}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  registrate: {
    fontSize: windowWidth*0.04,
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black'
  },
  gestickTitle: {
    fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    fontSize: windowWidth * 0.14,
    marginBottom: windowWidth * 0.05,
    fontWeight: 'bold',
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
    height: windowHeight * 0.05,
    width: windowWidth * 0.4,
    margin: 12,
    borderWidth: 0,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: windowWidth * 0.02,
    fontSize: windowWidth*0.03

  },
  inputid: {
    height: windowHeight * 0.05,
    margin: 12,
    marginBottom: windowWidth * 0.05,
    paddingHorizontal: windowWidth * 0.02,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#e3dfdf4e',
    borderRadius: 10,
    fontSize: windowWidth*0.03

  },
  titles: {
    marginBottom: windowWidth * 0.05,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: windowWidth * 0.06,

  },
  secondcontainer: {
    backgroundColor: 'white',
    padding: windowWidth * 0.04,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    height: windowHeight * 0.045,
    width: windowWidth *0.16,
  },
  buttonOpen: {
    backgroundColor: '#01A7C2',
    height: windowHeight * 0.045,
    width: windowWidth *0.16,
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:windowWidth*0.03
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowWidth * 0.05,
    height:windowHeight*0.05,
    width:windowWidth *0.55
  },
  iconpasswordview: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.08,
    backgroundColor: "#e3dfdf4e",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight:windowWidth*0.1
  },
  Pressablecontainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
});

export default Inicio


/*  #01A7C2  azul gestick */
/*  #1a1a1a  back negro gestick */