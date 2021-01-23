import { combineReducers } from 'redux';
import {
    ADD_DOCUMENT,
    UPDATE_DOCUMENT,
    DELETE_DOCUMENT,
    SET_SELECTED,
    SET_SEARCH
} from './actions';

// when you call store.dispatch(addDocument),
// where addDocument = {
//        type: "ADD_DOCUMENT",
//        payload: {
//          title: 'new doc',
//          content: 'new content'
//        }
// }
// redux will call documentsReducer(state.documents, addDocument)
function documentsReducer(state = [], action) {
    switch(action.type) {
        case ADD_DOCUMENT:
            return [
                ...state,
                action.payload
            ]
        case DELETE_DOCUMENT:
            // let newState = state.filter(function(doc) {
            //     return doc.id !== action.payload.id;
            // })
            // return newState;
            return state.filter(doc => doc.id !== action.payload.id);
        case UPDATE_DOCUMENT:
            let updateState = state.map(function(doc) {
                if (doc.id !== action.payload.id) {
                    return doc;
                }
                return {
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content
                }
            })
            return updateState;
            //return state.map(doc => doc.id !== action.payload.id ? doc : { ...action.payload});
        default:
            return state;
    }
}

function selectedReducer(state = '', action) {
    switch(action.type) {
        case SET_SELECTED:
            return action.payload.id
        default:
            return state;
    }
}


function searchReducer(state = '', action) {
    switch(action.type) {
        case SET_SEARCH:
            return action.payload.text
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
   documents: documentsReducer,
   selected: selectedReducer,
   search: searchReducer
})
