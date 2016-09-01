import {combineReducers, createStore} from 'redux';
import feedState from './../reducers/reducerFeedState.js';
import activeState from './../reducers/reducerActiveState.js';

const reducers = combineReducers({
    feedState: feedState,
    activeState: activeState
});

const store = createStore(reducers);

export default store;
