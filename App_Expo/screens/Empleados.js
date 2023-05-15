import React from "react";
import { View, StyleSheet, Text, ScrollView, Button, StatusBar } from "react-native";
import { TaskList } from "../components/TaskList";
import Session from "../components/Session";
export const Empleados = ({ navigation, route }) => {
  //console.log(`El idAdmin en Empleados: ${idadminB}`);
  return (
    <View style={[styles.center, styles.viewone]}>
      <StatusBar backgroundColor='gray' />
      <ScrollView>
        <TaskList navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  viewone: {
    backgroundColor: '#01A7C2'
  }
});

export default Empleados;
/**<ComponenteEmpleado navigation={navigation} />
        <ComponenteEmpleado navigation={navigation} />
        <ComponenteEmpleado navigation={navigation} />
        <ComponenteEmpleado navigation={navigation} />
        <ComponenteEmpleado navigation={navigation} />
        <ComponenteEmpleado navigation={navigation} />
        <ComponenteEmpleado navigation={navigation} /> */