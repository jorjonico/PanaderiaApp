import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CART } from '../data/cart'
import CartItem from '../assets/components/CartItem'
import React from 'react'
import colors from '../assets/constants/colors'
import fontSize from '../assets/constants/fontSize'

const CartScreen = () => {
    const items = CART
    const total = 120

    const handleConfirmCart = () => {
        console.log('funciona')
    }
    
    const handleDeleteItem = () => {
        console.log('eliminado')
    }
    
    const renderItem = ({item}) => {
        <CartItem item={item} onDelete={handleDeleteItem}/>
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm}>
                    <Text style={styles.final}>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total: </Text>
                        <Text style={styles.text}>{total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.white,
        paddingBottom: 120,
        
    },
    list:{
        flex:1,
        
    },
    footer: {
        padding: 12,
        borderTopColor: colors.primary,
        borderTopWidth: 1,
    },
    confirm:{
        backgroundColor:colors.secondary,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total:{
        flexDirection: 'row',
    },
    text:{
        fontSize: 18,
        padding: 8,
    },
    final:{
        fontFamily:'LoraReg',
        color:'#000',
        fontSize:fontSize.h2,
    }
    
});