import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Configuracion = () => {
  return (
    <View style={styles.center} >
      <Text>Configuracion</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Configuracion