import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import Ionicons from '@expo/vector-icons/Ionicons';
import { MainStackNavigator, ContactStackNavigator, ContactStackNavigatordos, ContactStackNavigatorInicio, BienvenidaStack, StackComponentempleado } from "./StackNavigator";
import { Ionicons, Entypo } from '@expo/vector-icons';
import Inicio from "../screens/Inicio";
import Bienvenida from "../screens/Bienvenida";
import ComponenteEmpleado from "../components/ComponenteEmpleado";
import { Text } from 'react-native'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

    < Tab.Navigator screenOptions={{ headerShown: false }}>
      {/**
    *    
      <Tab.Screen name="Inicio" component={ContactStackNavigatorInicio} options={{
        tabBarButton: () => null,
        tabBarStyle: { display: "none" },
      }} />
    */}
      <Tab.Screen name="Bienvenida" component={BienvenidaStack}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />

      <Tab.Screen name="Inventario" component={MainStackNavigator}
        options={{
          tabBarLabel: 'Inventario',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" size={24} color="#01A7C2" />),

        }}
      />


      <Tab.Screen name="Empleados" component={StackComponentempleado}
        options={{
          swipeEnabled: true,
          tabBarLabel: 'Empleados',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-sharp" size={24} color="#01A7C2" />
          ),
        }}
      />


      <Tab.Screen name="Perfil" component={ContactStackNavigatordos}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings-outline" color="#01A7C2" size={size} />
          ),
        }}
      />
    </Tab.Navigator >





  );
};

export default BottomTabNavigator;

const options = {
  headerShown: false
};