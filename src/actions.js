import { v4 as uuidv4 } from 'uuid';

// Document Action Types
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';

// Selected Action Types
export const SET_SELECTED = 'SET_SELECTED';

// Search Action Types
export const SET_SEARCH = 'SET_SEARCH';

// Action Creator Functions
export function addDocument(title, content) {
    return {
        type: ADD_DOCUMENT,
        payload: {
            id: uuidv4(),
            title,
            content
        }
    }
}

export function deleteDocument(id) {
    return {
        type: DELETE_DOCUMENT,
        payload: {
            id
        }
    }
}

export function updateDocument(id, title, content) {
    return {
        type: UPDATE_DOCUMENT,
        payload: {
            id,
            title, // Its assumed that this could be a new title
            content // ditto for the content
        }
    }
}

export function setSelected(id) {
    return {
        type: SET_SELECTED,
        payload: {
            id
        }
    }
}

export function setSearch(text) {
    return {
        type: SET_SEARCH,
        payload: {
            text
        }
    }
}

