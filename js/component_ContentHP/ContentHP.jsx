import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionChangeActive from './../actions/actionChangeActive.js';

const mapStateToProps = state => {return {
    feedState: state.feedState,
    activeState: state.activeState
}};

class ContentHP extends Component {

    constructor(){
        super();
        this.forEachLink = this.forEachLink.bind(this);
    }

    getMostPopularArticles(){
        var articles = this.props.feedState.slice();
        articles.sort((first, second)=>{return first.like > second.like ? -1 : 1});
        return articles.slice(0, 3);
    }

    changeActive(){
        store.dispatch(actionChangeActive(this));
    }

    forEachLink(article, index){
        const href = `/${article.league}/${article.id}`;
        return <h4 key={index}><a href={href} onMouseEnter={this.changeActive.bind(article)}>{article.header}</a></h4>
    }

    render(){
        var articles = this.getMostPopularArticles();
        var activeArticle = this.props.activeState[0];
        return <div className="main col-sm-5 col-md-7">
                    <article className="top-news">
                        <a href={`/${activeArticle.league}/${activeArticle.id}`}><img src={`./img/${activeArticle.imageUrl}`} alt=""/></a>
                        {articles.map(this.forEachLink)}
                    </article>
                </div>
    }
}

ContentHP = connect(mapStateToProps)(ContentHP);

export default ContentHP;