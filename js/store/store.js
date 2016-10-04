import {combineReducers, createStore} from 'redux';
import feedState from './../reducers/reducerFeedState.js';
import activeState from './../reducers/reducerActiveArticleState.js';
import tablesState from './../reducers/reducerTablesState.js';
import uniqueLeagues from './../reducers/reducerUniqueLeague.js';
import urlInfo from './../reducers/reducerUrlInfo.js';
import articlesState from './../reducers/reducerArticlesState.js';

const reducers = combineReducers({
    feedState: feedState,
    activeState: activeState,
    tablesState: tablesState,
    uniqueLeagues: uniqueLeagues,
    urlInfo: urlInfo,
    articlesState: articlesState
});

const store = createStore(reducers);

export default store;
