import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from "react";
import ComponenteEmpleado from './ComponenteEmpleado'
import { getTasks, deleteTask } from "../api";
import { RefreshControl } from 'react-native-gesture-handler';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import Session from './Session';
export const TaskList = ({ navigation }) => {
  const idadminB = Session.idadminB;
  const [tasks, setTasks] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = async (idEmpleado) => {
    await deleteTask(idEmpleado)
    await loadTasks()
  }
  const loadTasks = async () => {
    //console.log(`El admin en tasklist ${idadminB}`)
    const data = await getTasks(idadminB);
    console.log(data);
    setTasks(data);
  }

  const isFocused = useIsFocused();

  useEffect(() => {
    loadTasks()
  }, [isFocused])

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTasks()
    setRefreshing(false)
  })

  const renderItem = ({ item }) => {
    return <ComponenteEmpleado navigation={navigation} task={item} handleDelete={handleDelete}/>
    //console.log(renderItem)
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={['#78e08f']}
          onRefresh={onRefresh}
        />
      }
    />

  )
}


//rnss stylesheet 
const styles = StyleSheet.create({
  text: {
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default TaskList