import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import colors from '../constants/colors'
import fontSize from '../constants/fontSize'

const BreadItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity
            onPress={() => onSelected(item)}
        >
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>Precio: ${item.price}</Text>
                    <Text style={styles.details}>Peso: {item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BreadItem

const styles = StyleSheet.create({
    breadItem:{
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: colors.secondary,
    },
    title:{
        fontSize: fontSize.h1,
        fontFamily: 'LoraReg', 
    },
    details:{
        fontSize: fontSize.h2,
        fontFamily: 'LoraBold',
    }
})