import React from 'react'
import { StyleSheet, View, Text, StatusBar, TextInput, Button, SafeAreaView } from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

const SignInSchema = () => {
    return (
        <>
            <SafeAreaView></SafeAreaView>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signupContainer: {
      width: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
      backgroundColor: '#e6e6e6'
    },
  })
  export default SignInSchema