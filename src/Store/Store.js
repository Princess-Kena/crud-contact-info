import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase, firebaseReducer  } from 'react-redux-firebase';
import { getFirestore, firestoreReducer, reduxFirestore } from 'redux-firestore';
import contactsReducers from '../Reducers/contactsReducers';
import firebase from '../Firebase/firebase';

const reducers = combineReducers(
    {
        contact: contactsReducers,
        firestore: firestoreReducer
    }
)


export const Store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)
    )
);