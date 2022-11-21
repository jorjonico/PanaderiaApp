import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../assets/constants/colors'
import fontSize from '../assets/constants/fontSize'

const CategoryBreadScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bread Category</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}><Text style={styles.textButton}>Details</Text></Pressable>
        </View>
    )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title:{
        fontFamily:'LoraBold',
        fontSize: fontSize.h1,
        color: colors.acento,
    },
    button:{
        marginTop: 20,
        backgroundColor: colors.grisgit ,
        height: 40,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,   
    },
    textButton:{
        fontFamily:'LoraReg',
        fontSize: fontSize.h2,
        color: colors.primary,
    },
})