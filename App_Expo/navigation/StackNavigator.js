import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, Dimensions } from 'react-native'
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
import { InfoProducto } from "../screens/InfoProducto";
import { RegistrarAdmin } from "../screens/RegistrarAdmin";
import { IdAdmin } from "../components/Session";
const Stack = createStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const size = width >= 600 ? true : false;

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
            <TouchableOpacity onPress={() => navigation.navigate("NuevoProducto")}><Text style={{ fontSize: size ? windowWidth * 0.023 : 15, backgroundColor: "#01A7C2", color: 'white', margin: 20, height: size ? windowHeight * 0.033 : 30, width: size ? windowWidth * 0.19 : 130, paddingTop: 5, paddingLeft: 10, fontWeight: "bold", borderRadius: 10 }}>Nuevo Producto</Text></TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          },
        })}
      />
      <Stack.Screen name="NuevoProducto" component={EditProducto}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
      <Stack.Screen name="Información Producto" component={InfoProducto}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}

      />
    </Stack.Navigator>
  );
}

const StackComponentempleado = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Empleados" component={Empleados}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NuevoEmpleado")}><Text style={{ fontSize: size ? windowWidth * 0.023 : 15, backgroundColor: "#01A7C2", color: 'white', margin: 20, height: size ? windowHeight * 0.033 : 30, width: size ? windowWidth * 0.2 : 130, paddingTop: 5, paddingLeft: 10, fontWeight: "bold", borderRadius: 10 }}>Nuevo Empleado</Text></TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          },
        })}
      />
      <Stack.Screen name="Actualizar" component={Actualizar}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
      <Stack.Screen name="NuevoEmpleado" component={Nuevo_Empleado}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Empleados" component={Empleados}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
      <Stack.Screen name="About" component={About}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
    </Stack.Navigator>
  );
}

const ContactStackNavigatordos = ({ navigation }) => {
  return (
    /*
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
*/
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        //options={{ tabBarVisible: false }}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          },
          tabBarVisible: false
        })}
      />
    </Stack.Navigator>

  );
}

const ContactStackNavigatorInicio = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
    </Stack.Navigator>
  );
}

const BienvenidaStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
      <Stack.Screen name="Bienvenida" component={Bienvenida}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
      <Stack.Screen name="RegistrarAdmin" component={RegistrarAdmin}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: size ? windowWidth * 0.03 : 23,
          }
        })}
      />
    </Stack.Navigator>
  );
}


export { MainStackNavigator, ContactStackNavigator, ContactStackNavigatordos, ContactStackNavigatorInicio, BienvenidaStack, StackComponentempleado };