import { View, Text, StyleSheet, Pressable } from 'react-native'
import { React, useState, useEffect } from 'react'
import Session from '../components/Session';
const Bienvenida = ({ navigation, route }) => {
  const [idadminB, setIdAdminB] = useState(null);
  useEffect(() => {
    setIdAdminB(route.params.adminid);
    Session.idadminB = route.params.adminid;
  }, [route.params.adminid]);

  return (
    <View style={styles.Viewone}>
      <Text style={styles.textoaviso}>¡Hola de nuevo {route.params.adminName}!</Text>
      <View style={styles.Pressablecontainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            //[navigation.navigate("IdAdmin", { id:idadminB }), IdAdmin({id})]
            //let unu=IdAdmin(idadminB)
            navigation.navigate("Empleados")
          }
          }
        >
          <Text style={styles.textStyle}>Comenzar</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  Viewone: {
    backgroundColor: 'white',
    flex: 1
  },
  textoaviso: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    top: '35%',
    color: '#01A7C2',
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#01A7C2',
    height: 40,
    width: 120
  },
  Pressablecontainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: '40%'
  }
});






export default Bienvenida


/*  #01A7C2  azul gestick */
/*  #1a1a1a  back negro gestick */