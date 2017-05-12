/**
 * Created by webstudiopro on 3/8/17.
 */
import {createStore} from 'redux';
import adminReducer from './reducers';

const configStore = ()=>{
    return createStore(adminReducer, {
        categories: []
    });
};

export default configStore;