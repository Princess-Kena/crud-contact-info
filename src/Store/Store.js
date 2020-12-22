import {createStore} from 'redux';
import contactsReducers from '../Reducers/contactsReducers';



export const Store = createStore(contactsReducers)