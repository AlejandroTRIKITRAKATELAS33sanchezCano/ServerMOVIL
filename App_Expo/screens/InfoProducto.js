import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from "react";
import { getProducto } from '../api';


export const InfoEmpleado = ({ route }) => {

  const [producto, setProducto] = useState([])

  const loadEmpleado = async () => {
    const data = await getProducto(route.params.idProducto);
    //console.log(data);
    setProducto(data);
  }

  useEffect(() => {
    loadEmpleado()
  }, [])


  const renderItem = ({ item }) => {
    return (
      <View style={styles.fondo}>
      <View style={styles.container}>
        <View style={styles.containerP}>
        <View style={[styles.box, styles.box1]}>
        <View style={styles.nombreContainer}>
              <Text style={styles.nombre}>{item.PrNombre}</Text>
            </View>
            </View>
          <View style={[styles.box, styles.box2]}>
            <View style={styles.container_bs1}>
            <View style={styles.container_img}>
              <Image
                source={{
                  uri: "https://www.crushpixel.com/big-static17/preview4/hand-drawn-cartoon-stationery-set-2560318.jpg"
                }}
                style={styles.img_em}
              />
            </View>
            </View>
          </View>
          
          </View>
          
          <View style={styles.container_bs2}>
          <View style={styles.containerS1}>
          <View style={styles.row}>
         
            <View style={styles.idContainer}>
              <View>
                <Text style={styles.surtxt}>ID:</Text>
              </View>
            </View>
            <View style={styles.idText}>
              <View>
                <Text style={styles.infotxt}>{item.idProductos}</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.surtxt}>Descripción:</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.infotxt}>{item.PrDescripcion}</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.surtxt}>Precio:</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.infotxt}>{item.PrPrecio}</Text>
              </View>
            </View>
            </View>
            </View>
            </View>
            <View style={styles.container_bs2}>
            <View style={styles.row}>
            <View style={styles.containerS2}>
            
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.surtxt}>Existencias:</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.infotxt}>{item.PrExistencias}</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.surtxt}>Categoría:</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.infotxt}>{item.Categoria_idCategoria}</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.surtxt}>Marca:</Text>
              </View>
            </View>
            <View style={styles.container_infoem}>
              <View>
                <Text style={styles.infotxt}>{item.Marca_idMarca}</Text>
              </View>
            </View>
          </View>
          </View>
          </View>
      </View>
      </View>
    );
  }


  return (
    <View style={styles.center}>
      <FlatList
        data={producto}
        keyExtractor={(item) => item.idProductos + ''}
        renderItem={renderItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  fondo:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerP: {
    flex: 1,
    flexDirection: 'column'
  },
  containerS1: {
    marginTop: 270
  },
  containerS2: {
    marginTop: 270,
    right: 15
  },
  box: {
    marginTop: 10,
    height: 115
  },
  box1: {
    marginTop: 5,
    width: 360,
    height:40,
  },
  box2: {
    left:-20,
    width:325,
    height: 250,
    alignItems:"center",
  },
  descriptionContainer: {
    width: 200
  },
  idText: {
    top: 0
  },
  idContainer: {
    top: 0
  },
  nombreContainer: {
    width:360,
    color: "#a0170C",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  nombre: {
    fontSize: 30,
    fontWeight: '600'
  },
  center: {
    backgroundColor: "#006465",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: "100%"
  },
  container: {
    width: 360,
    height: 520,
    alignContent: 'center',
    backgroundColor: "#EAEBED",
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 20,
  },
  container_bs1: {
    width: 150,
    height: 250,
    marginTop: 5,
  },
  container_bs2: {
    marginTop: 20,
    left: -15,
  },
  container_img: {
    borderRadius: 15,
  },
  infotxt: {
    fontSize: 21,
    marginLeft: 50,
    fontWeight: '300'
  },
  surtxt: {
    fontSize: 21,
    marginLeft: 50,
    fontWeight: '600'
  },
  img_em: {
    width: 220,
    height: 220,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
  },
});
