import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionInitFeed from './../actions/actionInitFeed.js';
import fetchData from './../modules/fetchData.js';

import Header from './../component_header/Header.jsx';
import Navigation from '../component_navigation/Navigation.jsx';
import NewsList from './../component_newsList/NewsList.jsx';
import ContentHP from '../component_contentHP/ContentHP.jsx';
import Loader from '../component_loader/Loader.jsx';


const mapStateToProps = state => {return {feedState: state.feedState}};

class Container extends Component {

    componentWillMount(){
        fetchData('/data/feed.json').then(response =>store.dispatch(actionInitFeed(response)));
    }

    render(){
        return this.props.feedState.length ?
            (<div id="provider">
                <Header/>
                <div id="main" className="container">
                    <Navigation/>
                    <ContentHP/>
                    <div className="news-list col-sm-4 col-md-3">
                        <NewsList compateElem="like" header="Most Popular" listType="most-popular"/>
                        <NewsList compateElem="time" header="Last News" listType="last-news"/>
                    </div>
                </div>
            </div>) : <Loader/>;
    }
}

Container = connect(mapStateToProps)(Container);

export default Container;