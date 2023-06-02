import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Alert, IconButton, ActivityIndicator, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { React, useState, useEffect } from "react";
import { getProductUrl } from '../api';
import { ImageComponentProduct } from './ImageComponentProduct';

const ComponenteProducto = ({ navigation, producto, handleDelete, isTwoColumns }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const alertborrar = () =>
    Alert.alert('¿ESTÁS SEGURO DE BORRAR TU PRODUCTO?', 'Si borras el producto no podrás recuperarlo', [
      {
        text: 'Cancelar',
        onPress: () => console.log(`Operación cancelada`),
        style: 'cancel',
      },
      { text: 'Borrar', onPress: () => handleDelete(producto.idProductos) },
    ]);


  useEffect(() => {
    //console.log(`EL ID EN COMPONENET PRODUCTO ES: ${producto.idProductos}`)
    //console.log(`LA URL DENTRO DE COMPONENETE ES: ${imageUrl}`);
    const fetchImageUrl = async () => {
      try {
        //console.log(`EL ID DEL PRODUCTO PARA OBTENER LA URL ES: ${producto.idProductos}`)
        let url = null;
        const fetchedUrl = await getProductUrl(producto.idProductos);
        url = fetchedUrl && fetchedUrl.length > 0 ? fetchedUrl[0].PrURLimg : null;
        setImageUrl(url);
        setLoading(false);
        //console.log(`LA URL DENTRO DE COMPONENETE ES: ${imageUrl}`);
      } catch (error) {
        console.log("Error al obtener la URL de la imagen:", error);
        setLoading(false);
      }
    };
    fetchImageUrl();
  }, [producto.PrURLimg]);

  return (

    <View style={isTwoColumns ? styles.container_invtwo : styles.container_inv}>
      <View style={isTwoColumns ? styles.container_bs1two : styles.container_bs1}>
        <View style={isTwoColumns ? styles.container_imgtwo : styles.container_img}>
          <TouchableOpacity onPress={() => navigation.navigate("Información Producto", { idProducto: producto.idProductos })}>
            {
              /*
          <Image
              source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5609/5609501.png"
              }}
              style={styles.img_prod}
          />
          */
            }

            {loading ? (
              <ActivityIndicator size="large" color="black" />
            ) : (
              <ImageComponentProduct
                isTwoColumns={isTwoColumns}
                imageUrl={imageUrl}
              />
            )}

          </TouchableOpacity>
        </View>
      </View>
      <View style={isTwoColumns ? styles.container_bs2two : styles.container_bs2}>
        <View style={isTwoColumns ? styles.container_icontwo : styles.container_icon}>
          {/**
           * <TouchableOpacity onPress={() => {
            console.log("Valor de idProducto en el componente es:", producto.idProductos);
            navigation.navigate("NuevoProducto", { idProducto: producto.idProductos });
          }}>
            <Feather style={isTwoColumns ? styles.icon_edittwo : styles.icon_edit} name="edit" size={isTwoColumns ? windowWidth * 0.040 : windowWidth * 0.058} color="black" />
          </TouchableOpacity>
           */}


          <TouchableOpacity onPress={() => {
            //console.log("Valor de idProducto en el componente es:", producto.idProductos);
            navigation.navigate("NuevoProducto", { idProducto: producto.idProductos });
          }}>
            <Feather style={isTwoColumns ? styles.icon_edittwo : styles.icon_edit} name="edit" size={isTwoColumns ? windowWidth * 0.040 : windowWidth * 0.058} color="black" />
          </TouchableOpacity>

        </View>
        <View style={isTwoColumns ? styles.container_txttwo : styles.container_txt}>
          <Text style={isTwoColumns ? styles.txt_infotwo : styles.txt_info}>{producto.PrNombre}</Text>
        </View>
        <View style={isTwoColumns ? styles.container_icon2two : styles.container_icon2}>
          <TouchableOpacity onPress={alertborrar}                    >
            <Feather style={isTwoColumns ? styles.icon_edittwo : styles.icon_edit} name="trash" size={isTwoColumns ? windowWidth * 0.040 : windowWidth * 0.058} color="#AB0000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container_inv: {
    backgroundColor: "#EAEBED",
    //width: 250,
    //height: 250,
    width: windowWidth * 0.61,
    height: windowHeight * 0.3,
    borderRadius: 10,
    marginLeft: 80,
    marginTop: 15,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
    alignContent: 'center'
  },
  container_invtwo: {
    backgroundColor: "#EAEBED",
    width: windowWidth * 0.35,
    height: windowHeight * 0.23,
    borderRadius: 10,
    marginLeft: 80,
    marginTop: 15,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
  },
  container_bs1: {
    //width: 250,
    //height: 200,
    width: windowWidth * 0.61,
    height: windowHeight * 0.24,
  },
  container_bs1two: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
  },
  container_bs2: {
    //width: 250,
    //height: 50,
    width: windowWidth * 0.61,
    height: windowHeight * 0.05,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute', bottom: 0, left: 0, right: 0,
  },
  container_bs2two: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.045,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute', bottom: 0, left: 0, right: 0,
  },
  container_img: {
    //width: 200,
    //height: 170,
    width: windowWidth * 0.48,
    height: windowHeight * 0.2,
    backgroundColor: "#ffffff",
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
  },
  container_imgtwo: {
    width: windowWidth * 0.29,
    height: windowHeight * 0.15,
    backgroundColor: "#00A2E8",
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
  },

  container_icon: {
    
    //width: 40,
    //height: 30,
    
    zIndex: 1, 

    width: windowWidth * 0.02,
    height: windowHeight * 0.02,
    //backgroundColor:"red",
    position: 'absolute', bottom: windowHeight * -0.02, left: 0, right: 0,
    alignItems: 'center', // Añade esta línea

  },
  container_icon2: {
    zIndex: 1, 
    width: windowWidth * 0.02,
    height: windowHeight * 0.02,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: 'center',
    //backgroundColor:"red",
    position: 'absolute', bottom: windowHeight * -0.01, right: windowWidth * 0.095,
    alignItems: 'center', // Añade esta línea

  },
  container_icontwo: {
    //width: 60,
    //height: 50,
    width: windowWidth * 0.02,
    height: windowHeight * 0.02,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: 'center',
    position: 'absolute', bottom: windowHeight * -0.01, left: 0, right: 0,
  },
  container_icon2two: {
    width: windowWidth * 0.02,
    height: windowHeight * 0.02,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: 'center',
    //position: 'absolute', bottom: windowHeight * -0.01, right: windowWidth * 0.095,
    position: 'absolute', bottom: windowHeight * -0.01, left: windowWidth * 0.26, right: 0,
  },
  container_txt: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.055,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container_txttwo: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.050,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  img_prod: {
    width: 200,
    height: 170,
    borderRadius: 10,
  },
  txt_info: {
    fontWeight: '800',
    color: "white",
    fontFamily: 'Roboto',
    margin: 10,
    borderRadius: 10,
    fontSize: windowWidth * 0.04,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  txt_infotwo: {
    fontWeight: '800',
    color: "white",
    fontFamily: 'Roboto',
    margin: 10,
    borderRadius: 10,
    fontSize: windowWidth * 0.03,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon_edit: {
    //width: 0,
    width: windowWidth * 0.075,
    height: windowHeight * 0.04,
    //height: 30,
    margin: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: 4,
    paddingTop: 3,
    position: 'absolute', bottom: 0, left: 0, right: 0,
  },
  icon_edittwo: {
    width: windowWidth * 0.055,
    height: windowHeight * 0.035,
    margin: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: 4,
    paddingTop: 3,
    position: 'absolute', bottom: 0, left: 0, right: 0,
  },
  num_info: {
    width: 30,
    height: 20,
    fontFamily: 'Roboto',
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    textAlign: 'center'
  },

});

export default ComponenteProducto
