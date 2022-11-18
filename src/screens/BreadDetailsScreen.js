import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const BreadDetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bread Details</Text>
        <Button title='Back to Categories' onPress={() => navigation.popToTop()}/>
        <Button title='Back' onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E8EAE6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title:{
        fontFamily:'LoraBold',
        fontSize: 25,
        color: '#7C9473',
    }
})