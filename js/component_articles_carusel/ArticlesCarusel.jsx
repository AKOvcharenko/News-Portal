import React, {Component} from 'react';
import {Link} from 'react-router';
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
        this.showMore = this.showMore.bind(this);
    }

    getActiveArticle(){
        return this.props.activeState[0] || this.getMostPopularArticles()[0];
    }

    getMostPopularArticles(){

        var urlInfo = this.props.urlInfo;
        var articles = this.props.feedState.slice();

        articles = articles.filter(article => {
            if(urlInfo.league){
                return article.leagueUrl === urlInfo.league;
            }
            return true;
        });

        articles.sort((first, second)=>{return first.like > second.like ? -1 : 1});
        return this.state.more ? articles.slice(0, 10) : articles.slice(0, 3);
    }

    mouseEnter(){
        var self = this;
        this.waiting = setTimeout(function () { store.dispatch(actionChangeActive(self)); }, 250);
    }

    mouseLeave(){
        clearTimeout(this.waiting);
    }

    forEachLink(article, index){
        const href = `/${article.leagueUrl}/${article.id}`;
        const activeArticle = this.getActiveArticle();
        return <p className={"article-name " + (activeArticle === article ? "active" : "")} key={index}
                  onMouseLeave={this.mouseLeave.bind(article)}
                  onMouseEnter={this.mouseEnter.bind(article)}>
            <Link to={href}>{article.header}</Link>
        </p>
    }

    render(){
        var articles = this.getMostPopularArticles();
        var activeArticle = this.getActiveArticle();
        return <article className="top-news">
            <Animate transitionLeave={false}
                     transitionName="fade" >
                <Link key={activeArticle.id} to={`/${activeArticle.leagueUrl}/${activeArticle.id}`}><img src={`./img/${activeArticle.imageUrl}`} alt=""/></Link>
            </Animate>
            {articles.map(this.forEachLink)}
        </article>
    }
}

ArticlesCarusel = connect(mapStateToProps)(ArticlesCarusel);

export default ArticlesCarusel;