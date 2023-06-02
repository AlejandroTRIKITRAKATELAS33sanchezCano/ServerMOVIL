import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from "react";
import { getProducto } from '../api';


export const InfoProducto = ({ route }) => {


  const [producto, setProducto] = useState([])

  const loadEmpleado = async () => {
    console.log(`EL ID: ${route.params.idProducto}`);
    const data = await getProducto(route.params.idProducto);
    console.log(data);
    setProducto([data]); // Envolver el resultado en un arreglo
  };

  useEffect(() => {
    loadEmpleado()
  }, [])


  const renderItem = ({ item }) => {
    const url = item.PrURLimg
    return (
      <View style={islarge ? styles.containertwo : styles.container}>
        <View style={styles.containerP}>
          <View style={[styles.box, styles.box1]}>
            <View style={islarge ? styles.nombreContainertwo : styles.nombreContainer}>
              <Text style={islarge ? styles.nombretwo : styles.nombre}>{item.PrNombre}</Text>
            </View>
          </View>
          <View style={[styles.box, styles.box2]}>
            <View style={styles.container_bs1}>
              <View style={styles.container_img}>
                <Image
                  source={{
                    uri: url ? url : 'https://thumbs.dreamstime.com/z/caj%C3%B3n-triste-caja-de-entrega-vector-dibujo-personajes-dibujos-animados-planos-vectoriales-aislado-sobre-fondo-blanco-concepto-162992803.jpg'
                  }}
                  style={islarge ? styles.img_emtwo : styles.img_em}
                />
              </View>
            </View>
          </View>

        </View>

        <View style={styles.container_bs2}>
          <View style={islarge ? styles.containerS1vas : styles.containerS1}>
            <View style={styles.row}>

              <View style={islarge ? styles.idContainertwo : styles.idContainer}>
                <View>
                  <Text style={islarge ? styles.surtxttwo : styles.surtxt}>ID:</Text>
                </View>
              </View>
              <View style={islarge ? styles.idTexttwo : styles.idText}>
                <View >
                  <Text style={islarge ? styles.infotxttwo : styles.infotxt }>{item.idProductos}</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View >
                  <Text style={islarge ? styles.surtxttwo : styles.surtxt}>Descripción:</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View style={styles.descriptionContainer}>
                  <Text style={islarge ? styles.infodescriptiontwo : styles.infodescription}>{item.PrDescripcion}</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.surtxttwo : styles.surtxt}>Precio:</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.infotxttwo : styles.infotxt}>{item.PrPrecio}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container_bs2}>
          <View style={styles.row}>
            <View style={islarge ? styles.containerS2two : styles.containerS2}>

              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.surtxttwo : styles.surtxt}>Existencias:</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.infotxttwo : styles.infotxt}>{item.PrExistencias}</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.surtxttwo : styles.surtxt}>Categoría:</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.infotxttwo : styles.infotxt}>{item.Categoria_idCategoria}</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.surtxttwo : styles.surtxt}>Marca:</Text>
                </View>
              </View>
              <View style={styles.container_infoem}>
                <View>
                  <Text style={islarge ? styles.infotxttwo : styles.infotxt}>{item.Marca_idMarca}</Text>
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const islarge = width >= 600 ? true : false;

const styles = StyleSheet.create({
  containerP: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: "blue",
    //alignContent:'base',
    alignItems: 'baseline',
    marginLeft: windowWidth * 0.2
  },
  containerS1: {
    marginTop: 270
  },
  containerS1vas: {
    marginTop: windowWidth * 0.55,
    left: windowWidth * -0.2
  },
  containerS2: {
    marginTop: 270,
    right: 15
  },
  containerS2two: {
    marginTop: windowWidth * 0.55,
    right: windowWidth * 0.18
  },
  box: {
    marginTop: 40,
    height: windowHeight * 0.05,
    //backgroundColor: "green",
    alignContent: 'center',
    marginBottom:windowWidth * 0.04
  },
  box1: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  box2: {
    left: -20,
    width: 325,
    height: 250,
    alignItems: "center",
  },
  descriptionContainer: {
    width: 200
  },
  idText: {
    top: 0
  },
  idTexttwo: {
    top: 0
  },
  idContainer: {
    top: 0
  },
  idContainertwo: {
    top:0
  },
  nombreContainer: {
    width: 360,
    color: "#01A7C2",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  nombreContainertwo: {
    // backgroundColor:"red",
    width: 360,
    color: "#01A7C2",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    //marginBottom:0.5
  },
  nombre: {
    fontSize: 30,
    fontWeight: '600',
  },
  nombretwo: {
    fontSize: windowWidth * 0.055,
    fontWeight: '600',
  },
  center: {
    paddingTop: windowWidth * 0.08,
    backgroundColor: "#01A7C2",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
  },
  container: {
    width: 360,
    height: 520,
    alignContent: 'center',
    backgroundColor: "#EAEBED",
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 20
  },
  containertwo: {
    width: windowWidth * 0.75,
    height: windowHeight * 0.7,
    alignContent: 'center',
    backgroundColor: "#EAEBED",
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 20
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
  container_bs2two: {
    //backgroundColor:"red",
    justifyContent:'center',
  },
  container_img: {
    borderRadius: 15,
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  infotxt: {
    fontSize: 21,
    marginLeft: 50,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  infotxttwo: {
    fontSize: windowWidth* 0.04,
    marginLeft: 50,
    fontWeight: '300',
    backgroundColor: 'white',
    width: windowWidth * 0.3

  },
  
  
  infodescription: {
    fontSize: 12,
    marginLeft: 50,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  infodescriptiontwo: {
    fontSize: windowWidth * 0.03,
    marginLeft: 50,
    fontWeight: '300',
    backgroundColor: 'white',
    width: windowWidth * 0.3
  },
  surtxt: {
    fontSize: 21,
    marginLeft: 50,
    fontWeight: '600',
    color: "#01A7C2",
    fontWeight: "bold"
  },
  surtxttwo: {
    fontSize: windowWidth * 0.04,
    marginLeft: 50,
    fontWeight: '600',
    color: "#01A7C2",
    fontWeight: "bold",
    //width:windowWidth*0.5
  },
  img_em: {
    width: 220,
    height: 220,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
  },
  img_emtwo: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.23,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    marginLeft: windowWidth * 0.05
  },
});
