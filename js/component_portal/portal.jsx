import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './../store/store.js';

import Container from './../component_container/Container.jsx';

class Portal extends Component {
    render (){
        return <Provider store={store}>
            <Container urlInfo={this.props.params}/>
        </Provider>
    }
}

export default Portal;