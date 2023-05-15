import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Actualizar = () => {
  return (
    <View style={styles.center}>
    <View style={styles.container}>
      <View style={styles.container_bs1}>
        <View style={styles.container_img}>
          <Image 
          style={styles.img_prod} 
          source={require('./../imagenes/reactlogo.png')}
          />
        </View>
      </View>
      <View style={styles.container_bs2}>
        <View styles={styles.container_infoprod}>
          <View>
            <Text styles={styles.surtxt}>Nombre:</Text>
          </View>
        </View>
        <View styles={styles.container_infoprod}>
          <View>
            <Text styles={styles.infotxt}>txt</Text>
          </View>
        </View>
        <View styles={styles.container_infoprod}>
          <View>
            <Text styles={styles.surtxt}>Contraseña:</Text>
          </View>
        </View>
        <View styles={styles.container_infoprod}>
          <View>
            <Text styles={styles.infotxt}>txt</Text>
          </View>
        </View>
      </View>
    </View> 
  </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#74E1E4",
    alignItems: "center",
  },
  container:{
    width: 350,
    height: 350,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 200,
    backgroundColor: "#EAEBED",
    borderRadius: 15,
  },
  container_bs1:{
    width: 350,
    height: 200,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 25,
  },
  container_bs2:{
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  container_img:{
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  container_infoprod:{},
  infotxt:{
    fontSize: 30,
    marginLeft: 50,
  },
  surtxt:{
    fontSize: 30,
    marginLeft: 50,
  },
  img_prod:{
    width: 200,
    height: 200,
    borderRadius: 15,
  },
});
export default Actualizar

