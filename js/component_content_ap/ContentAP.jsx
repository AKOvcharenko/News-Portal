import React, {Component} from 'react';
import Article from './../component_article/Article.jsx';
//import Opinions from './../component_opinions/Opinions.jsx';
import fetchData from './../modules/fetchData.js';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionGotArticles from './../actions/actionGotArticlesData.js';

const mapStateToProps = state => {return {articles: state.articlesState}};

class ContentAP extends Component {

    componentWillMount(){
        this.requestForData();
    }

    requestForData(){
        var articles = this.props.articles;
        if (articles.length){
            store.dispatch(actionGotArticles(articles));
        }else{
            let src = `/data/articles.json`;
            fetchData(src).then(response => store.dispatch(actionGotArticles(response)));
        }
    }

    render(){
        return <div className="main col-sm-5 col-md-7">
            <Article/>
        </div>
    }
}

ContentAP = connect(mapStateToProps)(ContentAP);

export default ContentAP;