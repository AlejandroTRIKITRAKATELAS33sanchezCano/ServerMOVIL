import { React, useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons';
import { saveProducto } from '../api';
import { GenerarIdEmpleado } from '../components/Generar';
import { getMarcas } from '../api';
import SelectDropdown from 'react-native-select-dropdown'


export const EditProducto = ({ navigation }) => {
  const [marca, setMarca] = useState(null);
  const categoria = ["Cuadernos", "Plumas", "Resistoles", "colores"]

  const asignMC = async () => {
    //const marca = ["Norma", "Pritt", "Buffy", "Zebra"]
    const marcajson = await getMarcas;
    const marcaArray = await marcajson.json().toArray();
    setMarca(marcaArray)
    console.log(`LAS MARCAS SON: ${marca}`)
  }
  asignMC();

  const [producto, setProducto] = useState({
    idProductos: '',
    PrNombre: '',
    PrExistencias: '',
    PrPrecio: '',
    PrDescripcion: '',
    Categoria_idCategoria: '',
    Marca_idMarca: '',
    Admin_idAdmin: '1',
    Pcodigo: '1'
  })

  const asign = async () => {
    if (!id) {
      const idNewEmpleado = await GenerarIdEmpleado();
      //console.log(`EL VALOR DEL idNewEmpleado dentro de asign es : ${idNewEmpleado}`)
      await handleChange('idProductos', idNewEmpleado)
    } else {
      console.log('El empleado ya tiene un ID')
    }
  }

  const handleChange = (name, value) => {
    setProducto({ ...producto, [name]: value });
  };

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!edit) {
        await saveProducto(producto)
      } else {
        //await updateEmpleado(route.params.idEmpleado, task)
      }
      navigation.navigate("Inventario")
    } catch (error) {
      console.log(error)
    }
  }
  
 
  return (
    <View style={styles.center}>
      <View style={styles.container}>
        <View style={styles.container_bs1}>
          <View style={styles.container_img}>
            <Image
              source={{
                uri: "https://thoro.com.mx/ethoro/wp-content/uploads/2021/03/PE0026_011.jpg"
              }}
              style={styles.img_prod}
            />
          </View>
        </View>



        <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', top: -40 }}>
          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Producto:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="Ingresa el nombre del producto"
              onChangeText={(text) => handleChange('PrNombre', text)}
            />
          </View>

          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Existencias:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="Ingresa las existencias"
              keyboardType="numeric"
              onChangeText={(text) => handleChange('PrExistencias', text)}
            />
          </View>

          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Precio:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="Ingresa el precio"
              keyboardType="numeric"
              onChangeText={(text) => handleChange('PrPrecio', text)}
            />
          </View>

          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Descripcion:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="Ingresa una descripción"
              onChangeText={(text) => handleChange('PrDescripcion', text)}
            />

          </View>

          <View style={{ alignItems: 'center', alignContent: 'center' }}>
            <SelectDropdown
              data={marca}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
            <SelectDropdown
              data={categoria}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          </View>
          {/*
          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Categoria:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="En minusculas y sin acentos"
              onChangeText={(text) => handleChange('Categoria_idCategoria', text)}
            />
          </View>
          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Marca:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="En minusculas y sin acentos"
              onChangeText={(text) => handleChange('Marca_idMarca', text)}
              onFocus={() => asign()}
            />
          </View>
          */}
          <TouchableOpacity onPress={handleSubmit} style={styles.icon}>
            <Fontisto name="save" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: -330,
    left: 0,
  },
  center: {
    flex: 1,
    backgroundColor: '#01A7C2',
    alignItems: "center",
    alignContent: "center"
  },
  container: {
    width: 300,
    height: 490,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 50,
    backgroundColor: "#EAEBED",
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
  },
  container_bs1: {
    width: 200,
    height: 200,
    marginTop: 25,
    alignContent: 'center',
    alignItems: 'center'
  },
  container_bs2: {
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  container_img: {
    width: 200,
    height: 200,
    borderRadius: 15,
    top: -10
  },
  container_infotxt: {
    width: 235,
    height: 15,
    margin: 0,
  },
  container_infoinput: {
    width: 250,
    height: 35,
    padding: 5,
  },
  infotxt: {
    fontSize: 15,
    backgroundColor: "#FFFF",
    borderRadius: 6,
    paddingHorizontal: 10,
    shadowColor: "#57A8AA",
    shadowOpacity: 0.9,
    elevation: 1.5,
  },
  surtxt: {
    fontSize: 10,
    fontWeight: '800'
  },
  img_prod: {
    width: 130,
    height: 130,
    borderRadius: 15,
    left: 80
  },
});

