import { BREADS } from '../../data/bread'

const initialState = { 
    breads: BREADS,
    filteredBread: [],
    selected: null,
};

const BreadReducer = (state = initialState, action) =>{
    return state;
};

export default BreadReducer;