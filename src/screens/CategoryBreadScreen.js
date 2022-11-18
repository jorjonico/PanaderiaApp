import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoryBreadScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bread Category</Text>
        <Button title='Details' onPress={() => navigation.navigate('Details')}/>
        </View>
    )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#CDD0CB',
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