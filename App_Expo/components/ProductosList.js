import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from "react";
import { getProductos } from '../api';
import ComponenteProducto from './ComponenteProducto';
import { RefreshControl } from 'react-native-gesture-handler';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import Session from './Session'

const ProductosList = ({ navigation }) => {
    const idadminB = Session.idadminB;
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)
        await loadProductos()
        setRefreshing(false)
    })

    const [producto, setProducto] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const isFocused = useIsFocused();

    const loadProductos = async () => {
        const data = await getProductos(idadminB);
        console.log(data);
        setProducto(data);
    }

    useEffect(() => {
        loadProductos()
    }, [isFocused])


    const renderItem = ({ item }) => {
        return (
            <ComponenteProducto navigation={navigation} producto={item} />
        )
    }

    return (
        <View>
            <FlatList
                data={producto}
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
        </View>
    )
}

export default ProductosList