/**
 * Created by webstudiopro on 3/8/17.
 */
const homeReducer = (state, action)=>{
    switch (action.type){
        case 'CATEGORY_ACTION':
            return {
                ...state,
                categories: action.categories
            };
        case 'CATEGORY_SUB_ACTION':
            return {
                ...state,
                subCategories: action.categories
            };
        case 'PRODUCTS_BY_CATEGORY_ID_ACTION':
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};

export default homeReducer;