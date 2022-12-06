import { connect, useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import GridItem from '../assets/components/GridItem'
import React from 'react'

const CategoriesScreen = ({navigation}) => {

    const categories = useSelector((state) => state.categories.categories);
    
    const handleSelectedCategory = (item) => {
        navigation.navigate('Bread', {
            categoryID: item.id,
            name: item.title,
        })
    };
    
    const renderGridItem = ({item}) => (
        <GridItem item={item} onSelected={handleSelectedCategory}/>
    );
    
    return (
        <FlatList 
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
        />
    );
};

export default CategoriesScreen