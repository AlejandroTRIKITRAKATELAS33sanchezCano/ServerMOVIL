import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ComponenteProducto from "../components/ComponenteProducto";
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import ProductosList from "../components/ProductosList";



const Inventario = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.center}>
      <View style={styles.container_buscador}>
        <View style={styles.container_icon}>
        <TouchableOpacity onPress={() => alert('Buscando')} activeOpacity={0.5}>
          <AntDesign name="search1" size={24} color= "white"/>
        </TouchableOpacity>
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
        </View>
      </View>



      <ScrollView>
        <ProductosList navigation={navigation}/>
      </ScrollView>



    </View> 
  );
};


const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#01A7C2",
  },
  container_buscador: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#1A1A1A'
  },
  input: {
    width: 270,
    height: 40,
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
    marginLeft:50
  },
});

export default Inventario;

/**
 * <ComponenteProducto navigation={navigation}></ComponenteProducto>
        <ComponenteProducto navigation={navigation}></ComponenteProducto>
        <ComponenteProducto navigation={navigation}></ComponenteProducto>
        <ComponenteProducto navigation={navigation}></ComponenteProducto>
 */