import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { saveProducto } from '../api';
import { GenerarIdProducto } from '../components/GenerarProductid';
import Session from '../components/Session';
import { UploadCloudinaryProduct } from '../components/UploadCloudinaryProduct';
import { getProducto } from '../api';
import { getMarcas } from '../api';
import { getCategorias } from '../api';
import { updateProducto } from '../api';
//import RNPickerSelect from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown'


export const EditProducto = ({ navigation, route }) => {
  //console.log(`EL ROUTE.PARAMS EN EL USEFFECT DE EDIT ES: ${route.params.idProducto}`)
  const defaultButtonText = 'Seleccionar';
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);


  const asignMC = async () => {
    try {
      //console.log(`DENTRO DEL MC MARCAS EN CERO: ${marcas[0]}`)
      const marcasData = await getMarcas();
      if (!Array.isArray(marcasData)) {
        console.error('El resultado de getMarcas() no es un array:', marcasData);
        return;
      }
      const marcasNombres = marcasData.map((marca) => marca.MarNombre);
      setMarcas(marcasNombres);
    } catch (error) {
      console.error('Error al obtener las marcas en asignMC', error);
    }
  };


  const asignCM = async () => {
    try {
      const categoriasData = await getCategorias();
      if (!Array.isArray(categoriasData)) {
        console.error('El resultado de getCategorias() no es un array:', categoriasData);
        return;
      }
      const categoriasNombres = categoriasData.map((categoria) => categoria.CatNombre);
      setCategorias(categoriasNombres);
    } catch (error) {
      console.error('Error al obtener las categorias en asignCM', error);
    }
  };


  useEffect(() => {
    asignMC();
    asignCM();
  }, []);


  const idadminB = Session.idadminB;

  const [producto, setProducto] = useState({
    idProductos: '',
    PrNombre: '',
    PrPrecio: '',
    PrExistencias: '',
    PrDescripcion: '',
    Admin_idAdmin: idadminB,
    Marca_idMarca: '',
    Categoria_idCategoria: '',
    Pcodigo: 1,
    PrURLimg: ''
  })

  var regex1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var regex2 = null
  const handleChange = (name, value) => {
    if (name === 'PrExistencias' || name === 'PrPrecio') {
      if (isNaN(value)) {
        ToastAndroid.show('Hay campos vacíos', ToastAndroid.SHORT);
        return;
      }
    }
    setProducto({ ...producto, [name]: value });
  };

  const asign = async () => {
    if (!id) {
      const idNewProducto = await GenerarIdProducto();
      console.log(`EL VALOR DEL idNewEmpleado dentro de asign es : ${idNewProducto}`)
      await handleChange('idProductos', idNewProducto)
    } else {
      console.log('El producto ya tiene un ID')
    }
  }

  const handleImageSelected = (imageUrl) => {
    console.log(`EL LINK DE LA IMAGEN DENTRO DEL handleImageSelected es: ${imageUrl}`);
    if (typeof imageUrl === 'string') {
      handleChange('PrURLimg', imageUrl);
    } else {
      console.log('La URL de la imagen no es una cadena de texto válida');
    }
  };

  const handleSubmit = async () => {
    try {
      if (!edit) {
        let hasEmptyFields = false;
        for (const field in producto) {
          if (producto.hasOwnProperty(field)) {
            const value = producto[field];
            if (typeof value === 'string' && value.trim() === '') {
              hasEmptyFields = true;
              break;
            }
          }
        }
        if (hasEmptyFields) {
          console.log('Hay campos vacíos');
        } else {
          await saveProducto(producto);
        }
      } else {
        await updateProducto(route.params.idProducto, producto);
      }
      navigation.navigate("Inventario");
    } catch (error) {
      console.log(error);
    }
  }

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(false);



  useEffect(() => {
    //console.log(`EL ROUTE.PARAMS EN EL USEFFECT DE EDIT ES: ${route.params.idProducto}`)
    if (route.params && route.params.idProducto) {
      navigation.setOptions({
        headerTitle: 'Editar Producto'
      });

      setEdit(true);
      setId(true);

      (async () => {
        //console.log('Está en la función')
        const prcto = await getProducto(route.params.idProducto);
        //console.log(`LAS EXISTENCIAS SON: ${prcto.PrExistencias}`)
        //console.log(`EL PRODUCTO: ${prcto}`)
        //console.log(`EL NOMBRE ES: ${prcto.PrNombre}`)
        setProducto({
          idProductos: prcto.idProductos,
          PrNombre: prcto.PrNombre,
          PrPrecio: prcto.PrPrecio,
          PrExistencias: prcto.PrExistencias || '',
          PrDescripcion: prcto.PrDescripcion,
          Admin_idAdmin: prcto.Admin_idAdmin,
          Marca_idMarca: prcto.Marca_idMarca,
          Categoria_idCategoria: prcto.Categoria_idCategoria,
          Pcodigo: prcto.Pcodigo,
          PrURLimg: prcto.PrURLimg
        })
      })();
    }
  }, [])
 


  return (
    <View style={styles.center}>
      <View style={styles.container}> 
        <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', top: 30 }}>
       
          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Producto:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="Ingresa el nombre del producto"
              onChangeText={(text) => {
                if(regex1.test(text) || text.length > 45 || typeof text !== 'string'){
                  ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 45 caracteres', ToastAndroid.SHORT);
                  return;
                }
                handleChange('PrNombre', text)}}
              onFocus={() => asign()}
              value={producto.PrNombre}

            />
          </View>

          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Existencias:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              value={producto.PrExistencias.toString()}
              style={styles.infotxt}
              placeholder="Ingresa las existencias"
              keyboardType="numeric"
              onChangeText={(text) => {
                if(regex1.test(text) || text.length > 45 || isNaN(text)){
                  ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 45 caracteres, Solo numeros', ToastAndroid.SHORT);
                  return;
                }
                handleChange('PrExistencias', text)}}
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
              onChangeText={(text) => {
                if(regex1.test(text) || text.length > 45 || isNaN(text)){
                  ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 45 caracteres, Solo numeros', ToastAndroid.SHORT);
                  return;
                }
                handleChange('PrPrecio', text)}}
              value={producto.PrPrecio}
            />
          </View>

          <View style={styles.container_infotxt}>
            <Text style={styles.surtxt}>Descripcion:</Text>
          </View>
          <View style={styles.container_infoinput}>
            <TextInput
              style={styles.infotxt}
              placeholder="Ingresa una descripción"
              onChangeText={(text) => {
                if(regex1.test(text) || text.length > 500 || typeof text !== 'string'){
                  ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 500 caracteres', ToastAndroid.SHORT);
                  return;
                }
                handleChange('PrDescripcion', text)}}
              value={producto.PrDescripcion}
            />

          </View>

          <View style={{ alignItems: 'center', alignContent: 'center', backgroundColor: 'green' }}>
            <SelectDropdown
              onPress={asignMC}
              dropdownStyle={{ backgroundColor: 'orange' }}
              defaultButtonText="Seleccionar marca"
              defaultValue={edit ? marcas[producto.Marca_idMarca - 1] : defaultButtonText}
              data={marcas}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                let mar = index + 1
                console.log(`EL INDEX FINAL ES: ${mar}`)
                handleChange('Marca_idMarca', mar)
              }}
            />

            <SelectDropdown
              onPress={asignCM}
              dropdownStyle={{ backgroundColor: 'white' }}
              defaultButtonText="Seleccionar Categoría"
              defaultValue={edit ? categorias[producto.Categoria_idCategoria - 1] : defaultButtonText}
              data={categorias}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                let mar = index + 1
                console.log(`EL INDEX FINAL EN CATEGORIA ES: ${mar}`)
                handleChange('Categoria_idCategoria', mar)
              }}
            />
          </View>
          <View style={styles.container_bs1}>
            <View style={styles.container_img}>
              <UploadCloudinaryProduct onImageSelected={handleImageSelected} image={producto.PrURLimg} />
            </View>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.icon}>
            <Fontisto name="save" size={40} color="black" style={styles.icon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: -40,
    marginBottom: 10,
  },
  center: {
    flex: 1,
    backgroundColor: '#01A7C2',
    alignItems: "center",
    alignContent: "center",
    paddingTop:50
  },
  container: {
    width: 300,
    height: 500,
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
    marginLeft: 80,
    alignContent: 'center',
    alignItems: 'center',
  },
  container_img: {
    width: 200,
    height: 200,
    borderRadius: 15,
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

