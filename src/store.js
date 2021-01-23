import { createStore } from 'redux';
import { rootReducer } from './reducers';

const defaultState = {
    documents: [],
    selected: '',
    search: ''
}

const store = createStore(
    rootReducer,
    defaultState
)

export default store;