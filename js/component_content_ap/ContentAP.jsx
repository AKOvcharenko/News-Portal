import React, {Component} from 'react';
import Article from './../component_article/Article.jsx';
import Opinions from './../component_opinions/Opinions.jsx';
import Loader from '../component_loader/Loader.jsx';
import fetchData from './../modules/fetchData.js';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionGotArticles from './../actions/actionGotArticlesData.js';
import actionAddComment from './../actions/actionAddComment.js';

const mapStateToProps = state => {return {urlInfo: state.urlInfo, articles: state.articlesState, feedState: state.feedState}};

class ContentAP extends Component {

    componentWillMount(){
        this.requestForData();
    }

    constructor(){
        super();
        this.getArticle = this.getArticle.bind(this);
        this.changeCommentsLikesState = this.changeCommentsLikesState.bind(this);
    }

    changeCommentsLikesState(data){
        data && store.dispatch(actionAddComment(this.props.urlInfo.id, data));
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
        var articles = this.props.articles.length;
        var article = articles && this.getArticle();
        return <div className="main col-sm-5 col-md-7">
            { articles ?
                <div>
                    <Article changeLikeState={this.changeCommentsLikesState} article ={article}/>
                    <Opinions changeComments={this.changeCommentsLikesState} article={article}/>
                </div> :
                <Loader/>
            }
        </div>
    }
}

ContentAP = connect(mapStateToProps)(ContentAP);

export default ContentAP;