/**
 * Created by webstudiopro on 3/8/17.
 */
import config from '../config';


// CATEGORIES

// GET CATEGORIES
 export const categoryAction = (categories) => {
    return {
        type: 'CATEGORY_ACTION',
        categories
    };
 };

 export const recieveCategories = (dispatch)=> {
    $.ajax({
        url: config.DOMAIN+"/api/categories",
    }).done(function(data) {
        dispatch(categoryAction(data))
    });
 };

 // GET SUB CATEGORIES
 export const categoriesSubAction = (categories) => {
    return {
        type: 'CATEGORY_SUB_ACTION',
        categories
    };
 };

 export const recieveSubCategories = (dispatch, id, cb)=> {
    $.ajax({
        url: config.DOMAIN+"/api/subcategories/"+id,
    }).done(function(data) {
        dispatch(categoriesSubAction(data));
        cb(data);
    });
 };

 // GET PRODUCTS
 export const productsAction = (products) => {
    return {
        type: 'PRODUCTS_BY_CATEGORY_ID_ACTION',
        products
    };
 };

 export const recieveProducts = (dispatch, id)=> {
    $.ajax({
        url: config.DOMAIN+"/api/products_by_category_id/"+id,
    }).done(function(data) {
        dispatch(productsAction(data));
    });
 };

 // GET PROMO PRODUCTS

 export const recievePromoProducts = (dispatch)=> {
    $.ajax({
        url: config.DOMAIN+"/api/products_promo_by_category_id",
    }).done(function(data) {
        dispatch(productsAction(data));
    });
 };