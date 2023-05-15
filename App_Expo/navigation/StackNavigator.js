import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from 'react-native'
import Inventario from "../screens/Inventario";
import About from "../screens/About";
import Empleados from "../screens/Empleados";
import Inicio from "../screens/Inicio";
import Bienvenida from "../screens/Bienvenida";
import ComponenteEmpleado from "../components/ComponenteEmpleado";
import Actualizar from "../screens/Actualizar";
import Nuevo_Empleado from "../components/Nuevo_Empleado";
import Perfil from "../screens/Perfil";
import { EditProducto } from "../screens/EditProducto";
import { InfoEmpleado } from "../screens/InfoProducto";
import { RegistrarAdmin } from "../screens/RegistrarAdmin";
import {IdAdmin} from "../components/Session";
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "#01A7C2",
  headerBackTitle: "#01A7C2"
};


const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Inventario" component={Inventario}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("NuevoProducto")}><Text style={{backgroundColor:"#01A7C2", color: 'white', margin: 20, height:30,width:120, paddingTop:5, paddingLeft:10, fontWeight:"bold", borderRadius:10 }}>Nuevo Producto</Text></TouchableOpacity>
            )
          })}
      />
      <Stack.Screen name="NuevoProducto" component={EditProducto} />
      <Stack.Screen name="Información Producto" component={InfoEmpleado} />
    </Stack.Navigator>
  );
}

const StackComponentempleado = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Empleados" component={Empleados}
         options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NuevoEmpleado")}><Text style={{ backgroundColor:"#01A7C2", color: 'white', margin: 20, height:30,width:120, paddingTop:5, paddingLeft:7, fontWeight:"bold", borderRadius:10 }}>Nuevo Empleado</Text></TouchableOpacity>
          )
        })}
      />
      <Stack.Screen name="Actualizar" component={Actualizar} />
      <Stack.Screen name="NuevoEmpleado" component={Nuevo_Empleado} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Empleados" component={Empleados} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigatordos = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

const ContactStackNavigatorInicio = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
}

const BienvenidaStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Bienvenida" component={Bienvenida} />
      <Stack.Screen name="RegistrarAdmin" component={RegistrarAdmin} />
    </Stack.Navigator>
  );
}


export { MainStackNavigator, ContactStackNavigator, ContactStackNavigatordos, ContactStackNavigatorInicio, BienvenidaStack, StackComponentempleado };