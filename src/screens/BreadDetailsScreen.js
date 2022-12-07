import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../assets/constants/colors'
import fontSize from '../assets/constants/fontSize'
import { useSelector } from 'react-redux'

const BreadDetailsScreen = ({navigation}) => {

    const bread = useSelector((state) => state.breads.selected)
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bread Details</Text>
        <Pressable style={styles.button} onPress={() => navigation.popToTop()}><Text style={styles.textButton}>Back to Categories</Text></Pressable>
        <Pressable style={{...styles.button , backgroundColor: colors.primary}} onPress={() => navigation.goBack()}><Text style={{...styles.textButton, color:colors.white}}>Back</Text></Pressable>
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
        padding: 20,
    },
    title:{
        fontFamily:'LoraBold',
        fontSize: fontSize.h1,
        color: colors.primary,
    },
    button:{
        marginTop: 20,
        backgroundColor: colors.gris,
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