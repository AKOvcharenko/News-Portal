import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './../store/store.js';

import Header from './../component_header/Header.jsx';
import Navigation from './../component_navigation/Navigation.jsx';
import NewsList from './../component_newsList/NewsList.jsx';
import ContentHP from '../component_contentHP/ContentHP.jsx';


class Portal extends Component {
    render (){
        return <Provider store={store}>
            <div id="provider">
                <Header/>
                <div id="main" className="container">
                    <Navigation/>
                    <ContentHP/>
                    <div className="news-list col-sm-4 col-md-3">
                        <NewsList compateElem="like" header="Most Popular" listType="most-popular"/>
                        <NewsList compateElem="time" header="Last News" listType="last-news"/>
                    </div>
                </div>
            </div>
        </Provider>
    }
}

export default Portal;