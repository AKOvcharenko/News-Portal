import React, {Component} from 'react';
import Animate from 'rc-animate';
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

    getActiveArticle(){
        return this.props.activeState[0];
    }

    getMostPopularArticles(){
        var articles = this.props.feedState.slice();
        articles.sort((first, second)=>{return first.like > second.like ? -1 : 1});
        return articles.slice(0, 3);
    }

    mouseEnter(){
        var self = this;
        this.waiting = setTimeout(function () { store.dispatch(actionChangeActive(self)); }, 250);
    }

    mouseLeave(){
        clearTimeout(this.waiting);
    }

    forEachLink(article, index){
        const href = `/${article.league}/${article.id}`;
        const activeArticle = this.getActiveArticle();
        return <p className={"article-header " + (activeArticle === article ? "active" : "")} key={index}
                  onMouseLeave={this.mouseLeave.bind(article)}
                  onMouseEnter={this.mouseEnter.bind(article)}>
                    <a href={href}>{article.header}</a>
                </p>
    }

    render(){
        var articles = this.getMostPopularArticles();
        var activeArticle = this.getActiveArticle();
        return <div className="main col-sm-5 col-md-7">
                    <article className="top-news">
                        <Animate  transitionLeave={false}
                                 transitionName="fade" >
                            <a key={activeArticle.id} href={`/${activeArticle.league}/${activeArticle.id}`}><img src={`./img/${activeArticle.imageUrl}`} alt=""/></a>
                        </Animate>
                        {articles.map(this.forEachLink)}
                    </article>
                </div>
    }
}

ContentHP = connect(mapStateToProps)(ContentHP);

export default ContentHP;