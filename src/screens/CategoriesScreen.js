import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>CategoriesScreen</Text>
        <Button title='Go to Bread' onPress={() => navigation.navigate('Bread')}/>
        </View>
    )
}

export default CategoriesScreen

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