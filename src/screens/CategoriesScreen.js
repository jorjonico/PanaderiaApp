import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../assets/constants/colors'
import fontSize from '../assets/constants/fontSize'

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>CategoriesScreen</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Bread')}><Text style={styles.textButton}>Go to Bread</Text></Pressable>
        </View>
    )
}

export default CategoriesScreen

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
        color: colors.primary,
    },
    button:{
        marginTop: 20,
        backgroundColor: colors.primary,
        height: 40,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,   
    },
    textButton:{
        fontFamily:'LoraReg',
        fontSize: fontSize.h2,
        color: colors.white,
    },
})