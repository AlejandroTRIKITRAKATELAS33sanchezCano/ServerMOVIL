import { React, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ComponenteProducto from "../components/ComponenteProducto";
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native";
import ProductosList from "../components/ProductosList";



const Inventario = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  //const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.center}>
      <View style={styles.container_buscador}>
        <View style={styles.container_icon}>
          <TouchableOpacity onPress={() => alert('Buscando')} activeOpacity={0.5}>
            <AntDesign name="search1" size={islarge ? 35 : windowWidth * 0.06} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.container_input}>
          <TextInput
            style={islarge ? styles.input : styles.inputtwo}
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Buscar productos..."
          />
        </View>
      </View>



      <ScrollView>
        <ProductosList navigation={navigation} searchQuery={searchQuery} />
      </ScrollView>



    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const islarge = width >= 600 ? true : false;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#01A7C2",

  },
  container_buscador: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#1A1A1A',
  },
  input: {
    width: windowWidth * 0.55,
    height: windowHeight * 0.04,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,1)",
  },
  inputtwo: {
    width: windowWidth * 0.60,
    height: windowHeight * 0.045,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,1)",
  },
  container_input: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container_icon: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //marginLeft: 50
  },
});

export default Inventario;

/**
 * <ComponenteProducto navigation={navigation}></ComponenteProducto>
        <ComponenteProducto navigation={navigation}></ComponenteProducto>
        <ComponenteProducto navigation={navigation}></ComponenteProducto>
        <ComponenteProducto navigation={navigation}></ComponenteProducto>
 */