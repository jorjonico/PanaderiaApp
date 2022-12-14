import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { addItem } from '../store/actions/cart.action'
import colors from '../assets/constants/colors'
import fontSize from '../assets/constants/fontSize'

const BreadDetailsScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const bread = useSelector((state) => state.breads.selected)

    const handleAddItemCart = () => {
        dispatch(addItem(bread));
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <Text style={styles.title}>{bread.name}</Text>
                <Text style={styles.description}>{bread.description}</Text>
                <Text style={styles.price}>Precio: ${bread.price}</Text>
                <View style={styles.button}>
                    <Button title='Agregar al Carrito' onPress={handleAddItemCart}/>
                </View>
                
            </View>
        </View>
    )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    screen:{
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: fontSize.h1,
        fontFamily: 'LoraBold',
    },
    description:{
        fontSize: fontSize.h2
    },
    price:{
        fontSize: fontSize.h1,
        fontFamily: 'LoraReg',
    },
    button:{
        marginTop: 15,
    }
})