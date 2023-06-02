import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Pressable, ToastAndroid } from 'react-native'
import { React, useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { saveTask, gestTask, updateEmpleado } from '../api';
import { getIdEmpleado } from '../api';
import { GenerarIdEmpleado } from './Generar';
import { UploadCloudinary } from './UploadCloudinary';
import Session from './Session';

const Nuevo_Empleado = ({ navigation, route }) => {
    const idadminB = Session.idadminB;
    const [task, setTask] = useState({
        idEmpleado: '',
        EmNombre: '',
        EmApat: '',
        EmAmat: '',
        EmContrasenna: '',
        Admin_idAdmin: idadminB,
        EmURLimg: ''
    })

    var regex1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var regex2 = null
    const handleChange = (name, value) => {
        if(!value){
            ToastAndroid.show('Hay campos vacíos', ToastAndroid.SHORT);
            value = '';
        }
        setTask({ ...task, [name]: value });
    };

    const asign = async () => {
        if (!id) {
            const idNewEmpleado = await GenerarIdEmpleado();
            await handleChange('idEmpleado', idNewEmpleado)
        } else {
            console.log('El empleado ya tiene un ID')
        }
    }
    /*
        const handleImageSelected = async (imageUrl) => {
            console.log(`EL LINK DE LA IMAGEN DENTRO DEL handleImageSelected es: ${imageUrl}`);
            await handleChange('EmURLimg', imageUrl)
        };
    */
    const handleImageSelected = (imageUrl) => {
        console.log(`EL LINK DE LA IMAGEN DENTRO DEL handleImageSelected es: ${imageUrl}`);
        if (typeof imageUrl === 'string') {
            handleChange('EmURLimg', imageUrl);
        } else {
            console.log('La URL de la imagen no es una cadena de texto válida');
        }
    };
/*
    const handleSubmit = async () => {
        try {
            if (!edit) {
                await saveTask(task);
            } else {
                await updateEmpleado(route.params.idEmpleado, task)
            }
            navigation.navigate("Empleados")
        } catch (error) {
            console.log(error)
        }
    }
    */
    const handleSubmit = async () => {
        try {
          if (!edit) {
            let hasEmptyFields = false;
            for (const field in task) {
              if (task.hasOwnProperty(field)) {
                const value = task[field];
                if (typeof value === 'string' && value.trim() === '') {
                  hasEmptyFields = true;
                  break;
                }
              }
            }
            if (hasEmptyFields) {
              console.log('Hay campos vacíos');
            } else {
              await saveTask(task);
            }
          } else {
            await updateEmpleado(route.params.idEmpleado, task)
        }
          navigation.navigate("Empleados");
        } catch (error) {
          console.log(error);
        }
      }

    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(false);


    useEffect(() => {
        if (route.params && route.params.idEmpleado) {
            navigation.setOptions({
                headerTitle: 'Editar Empleado'
            });

            setEdit(true);
            setId(true);

            (async () => {
                const empleado = await gestTask(route.params.idEmpleado);
                console.log(`EL EMPLEADO: ${empleado}`)
                //console.log(`El nombre es: ${empleado.EmNombre}`)
                setTask({
                    idEmpleado: empleado.idEmpleado,
                    EmNombre: empleado.EmNombre,
                    EmApat: empleado.EmApat,
                    EmAmat: empleado.EmAmat,
                    EmContrasenna: empleado.EmContrasenna,
                    Admin_idAdmin: empleado.Admin_idAdmin,
                    EmURLimg: empleado.EmURLimg
                })
            })();
        }
    }, [])

    return (
        <View style={styles.viewone}>
            <View style={styles.viewtwo}>
                <TextInput style={styles.inputNombre}
                    onChangeText={(text) => {
                        if(regex1.test(text) || text.length > 45 || typeof text !== 'string'){
                            ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 45 caracteres', ToastAndroid.SHORT);
                            return;
                        }
                        handleChange('EmNombre', text)}}
                    value={task.EmNombre}
                    placeholder='Ingresa el nombre'
                />
                <TextInput secureTextEntry={true} style={styles.inputContraseña}
                    onChangeText={(text) => {
                        if(text.length > 45){
                            ToastAndroid.show('longitud maxima de 45 caracteres', ToastAndroid.SHORT);
                            return;
                        }
                        handleChange('EmContrasenna', text)}}
                    onFocus={() => asign()}
                    value={task.EmContrasenna}
                    placeholder='Ingresa la contraseña'
                />
                <TextInput style={styles.inputPaterno}
                    onChangeText={(text) => {
                        if(regex1.test(text) || text.length > 45 || typeof text !== 'string'){
                            ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 45 caracteres', ToastAndroid.SHORT);
                            return;
                        }
                        handleChange('EmApat', text)}}
                    value={task.EmApat}
                    placeholder='Ingresa el apellido paterno'
                />
                <TextInput style={styles.inputMaterno}
                    onChangeText={(text) => {
                        if(regex1.test(text) || text.length > 45 || typeof text !== 'string'){
                            ToastAndroid.show('No se aceptan caracteres especiales, longitud maxima de 45 caracteres', ToastAndroid.SHORT);
                            return;
                        }
                        handleChange('EmAmat', text)}}
                    value={task.EmAmat}
                    placeholder='Ingresa el apellido materno'
                />
                <Text style={styles.textNombre}>NOMBRE:</Text>
                <Text style={styles.textMaterno}>APELL MATER:</Text>
                <Text style={styles.textPaterno}>APELL PATER:</Text>
                <Text style={styles.textContraseña}>CONTRASEÑA:</Text>

                <View style={styles.imagecontainer}>
                    <UploadCloudinary onImageSelected={handleImageSelected} image={task.EmURLimg} />
                </View>

                <TouchableOpacity onPress={handleSubmit} >
                    <AntDesign name="checkcircleo" size={50} color="green" style={styles.icon}/>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    viewone: {
        backgroundColor: '#01A7C2',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    viewtwo: {
        backgroundColor: '#EAEBED',
        width: 325,
        height: 450,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50

    },
    inputNombre: {
        backgroundColor: 'white',
        width: 180,
        top: -5,
        left: 60,
        borderRadius: 5,
        paddingLeft: 5
    },
    inputContraseña: {
        backgroundColor: 'white',
        width: 180,
        top: 130,
        left: 60,
        borderRadius: 5,
        paddingLeft: 5
    },
    inputPaterno: {
        backgroundColor: 'white',
        width: 180,
        top: -5,
        left: 60,
        borderRadius: 5,
        paddingLeft: 5
    },
    inputMaterno: {
        backgroundColor: 'white',
        width: 180,
        top: 20,
        left: 60,
        borderRadius: 5,
        paddingLeft: 5
    },
    textNombre: {
        color: 'black',
        fontSize: 15,
        top: -110,
        left: -120
    },
    textContraseña: {
        color: 'black',
        fontSize: 15,
        top: -10,
        left: -105
    },
    textMaterno: {
        color: 'black',
        fontSize: 15,
        top: -25,
        left: -105
    },
    textPaterno: {
        color: 'black',
        fontSize: 15,
        top: -100,
        left: -105
    },
    imageone: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 14
    },
    icon: {
        top: 35,
        alignItems: 'center'
    },
    imagecontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        top: 15
    }
});

export default Nuevo_Empleado