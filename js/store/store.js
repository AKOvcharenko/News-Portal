import {combineReducers, createStore} from 'redux';
import feedState from './../reducers/reducerFeedState.js';
import activeState from './../reducers/reducerActiveArticleState.js';
import tablesState from './../reducers/reducerTablesState.js';
import uniqueLeagues from './../reducers/reducerUniqueLeague.js';
import urlInfo from './../reducers/reducerUrlInfo.js';

const reducers = combineReducers({
    feedState: feedState,
    activeState: activeState,
    tablesState: tablesState,
    uniqueLeagues: uniqueLeagues,
    urlInfo: urlInfo
});

const store = createStore(reducers);

export default store;
