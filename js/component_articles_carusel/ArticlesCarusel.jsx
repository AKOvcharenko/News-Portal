import React, {Component} from 'react';
import Animate from 'rc-animate';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionChangeActive from './../actions/actionChangeActiveArticle.js';

const mapStateToProps = state => {return {
    feedState: state.feedState,
    activeState: state.activeState,
    urlInfo: state.urlInfo
}};

class ArticlesCarusel extends Component {

    constructor(){
        super();
        this.forEachLink = this.forEachLink.bind(this);
        this.getActiveArticle = this.getActiveArticle.bind(this);
    }

    getActiveArticle(){
        /*var active = this.props.activeState[0];
        if(active && active.leagueUrl && this.props.pageInfo.league && active.leagueUrl !== this.props.pageInfo.league){
            return this.getMostPopularArticles()[0]; // case when user navigates to league page
        }*/

        return this.props.activeState[0] || this.getMostPopularArticles()[0];
    }

    getMostPopularArticles(){

        /*var pageInfo = this.props.pageInfo;*/
        var articles = this.props.feedState.slice();

        /*articles = articles.filter(article => {
            let articlesLeague = article.league.toLowerCase();
            if(pageInfo.league){
                return article.leagueUrl === pageInfo.league;
            }
            return true;
        });*/

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
        return <article className="top-news">
            <Animate transitionLeave={false}
                     transitionName="fade" >
                <a key={activeArticle.id} href={`/${activeArticle.league}/${activeArticle.id}`}><img src={`./img/${activeArticle.imageUrl}`} alt=""/></a>
            </Animate>
            {articles.map(this.forEachLink)}
        </article>
    }
}

ArticlesCarusel = connect(mapStateToProps)(ArticlesCarusel);

export default ArticlesCarusel;