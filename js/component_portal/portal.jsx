import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './../store/store.js';

import Header from './../component_header/Header.jsx';
import Navigation from './../component_navigation/Navigation.jsx';
import MostPopular from './../component_mostPopular/MostPopular.jsx';


class Portal extends Component {
    render (){
        return <Provider store={store}>
            <div id="provider">
                <Header/>
                <div id="main" className="container">
                    <Navigation/>
                    <div className="news-list col-sm-4 col-md-3">
                        <MostPopular/>
                    </div>
                </div>
            </div>
        </Provider>
    }
}

export default Portal;