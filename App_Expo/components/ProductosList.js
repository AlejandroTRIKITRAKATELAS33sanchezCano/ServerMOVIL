import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from "react";
import { getProductos } from '../api';
import ComponenteProducto from './ComponenteProducto';
import { RefreshControl } from 'react-native-gesture-handler';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { deleteProducto } from '../api';
import Session from './Session'


const { width } = Dimensions.get('window');
const numColumns = width >= 600 ? 2 : 1;


const ProductosList = ({ navigation, searchQuery }) => {
    const [columnKey, setColumnKey] = useState(0);
    const [noResults, setNoResults] = useState(false);
    const [isTwoColumns, setIsTwoColumns] = useState(numColumns === 2);

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
        /*
        const data = await getProductos(idadminB);
        console.log(data);
        setProducto(data);
        */
        const data = await getProductos(idadminB);
        const filteredProductos = data.filter((producto) =>
            producto.PrNombre.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredProductos.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }

        setProducto(filteredProductos);

    }

    useEffect(() => {
        loadProductos()
    }, [isFocused, searchQuery]);

    const handleDelete = async (idProducto) => {
        await deleteProducto(idProducto)
        await loadProductos()
    }

    const renderItem = ({ item }) => {
        return (
            <ComponenteProducto navigation={navigation} producto={item} handleDelete={handleDelete} isTwoColumns={isTwoColumns}
            />
        )
    }

    return (
        <View>
            {noResults ? (
                <View style={styles.viewone}>
                    <Text style={styles.textoaviso}>¡Ups parece que lo que estás buscando no existe</Text>
                    <Image
                        source={{
                            uri: "data:image/jpeg;base64,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"
                        }}
                        style={styles.img_prod}
                    />
                </View>
            ) : (
                <FlatList
                    //style={styles.flatview}
                    data={producto}
                    keyExtractor={(item) => item.id + ''}
                    key={columnKey}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    //numColumns={1}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            colors={['#78e08f']}
                            onRefresh={onRefresh}
                        />
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    flatview: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewone: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: "20%",
        height: 330
    },
    textoaviso: {
        //marginTop:100,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'
    },
    img_prod: {
        margin: 25,
        alignItems: 'center',
        width: 200,
        height: 170,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        //left:80
    }
});
export default ProductosList