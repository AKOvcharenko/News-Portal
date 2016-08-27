import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './../store/store.js';

import Header from './../component_header/Header.jsx';
import Navigation from './../component_navigation/Navigation.jsx';

class Portal extends Component {
    render (){
        return <Provider store={store}>
            <div id="provider">
                <Header/>
                <div id="main" className="container">
                    <Navigation/>
                </div>
            </div>
        </Provider>
    }
}

export default Portal;