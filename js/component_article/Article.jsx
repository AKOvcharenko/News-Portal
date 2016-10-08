import React, {Component} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = state => {return {urlInfo: state.urlInfo, articles: state.articlesState, feedState: state.feedState}};


class Article extends Component {

    constructor(){
        super();
        this.getArticle = this.getArticle.bind(this);
    }

    getArticle(){
        let infoArticles = this.props.articles;
        let feed = this.props.feedState;
        let id = this.props.urlInfo.id;
        let infoPart = infoArticles.filter(article => {return article.id === id})[0];
        let feedPart = feed.filter(article => {return article.id === id})[0];
        return {
            header : feedPart.header,
            imageUrl : feedPart.imageUrl,
            liked : feedPart.liked,
            like : feedPart.like,
            commentsNumber : feedPart.comments,
            commented : feedPart.commented,
            comments : infoPart.comments,
            text : infoPart.text
        };
    }

    render(){
        var article = this.getArticle();
        return <div>
            <article>
                <h2 className="article-header">{article.header}</h2>
                <img className="article-image" src={`./img/${article.imageUrl}`}/>
                <p className="article-body">{article.text}</p>
            </article>
        </div>
    }
}

Article = connect(mapStateToProps)(Article);

export default Article;