import { CATEGORIES } from '../../data/categories'

const initialState = { 
    categories: CATEGORIES,
    selected: null,
};

const CategoryReducer = (state = initialState, action) =>{
    return state;
};

export default CategoryReducer;