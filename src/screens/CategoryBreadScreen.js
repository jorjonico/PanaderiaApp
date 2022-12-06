import { connect, useDispatch, useSelector } from 'react-redux'

import {BREADS} from '../data/bread'
import BreadItem from '../assets/components/BreadItem'
import { FlatList } from 'react-native'
import React from 'react'

const CategoryBreadScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories.selected);
    const categoryBreads = useSelector ((state) => state.categories.filteredBread)

    const breads = BREADS.filter(bread => bread.category === route.params.categoryID)

    const handleSelectedCategory = (item) => {
        navigation.navigate('Details', {
            productID: item.id,
            name: item.name,
        })
    };

    const renderBreadItem = ({item}) => (
        <BreadItem item={item} onSelected={handleSelectedCategory}/>
    );
    
    return (
        <FlatList 
        data={categoryBreads}
        keyExtractor={(item) => item.id}
        renderItem={renderBreadItem}
        />
    )
}

export default CategoryBreadScreen