import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import colors from '../constants/colors';
import fontSize from '../constants/fontSize';

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text>Cantidad: {item.quantity} </Text>
                    <Text>Precio: {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={20} color={colors.acento} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    header:{
        fontFamily: 'LoraBold',
        fontSize: fontSize.h2,
        color: colors.primary,
    },
    detail:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'space-between',
    }
})