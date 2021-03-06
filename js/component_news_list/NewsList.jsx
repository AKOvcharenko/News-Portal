import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Like from './../component_like/Like.jsx';
import Comment from './../component_comment/Comment.jsx';

const mapStateToProps = state => {return {feedState: state.feedState, urlInfo: state.urlInfo}};

class NewsList extends Component{
    getArticles(){
        var  feed = this.props.feedState.slice();
        var urlInfo = this.props.urlInfo;
        const compateElem = this.props.compateElem;

        feed = feed.filter(article => {
            if(urlInfo.league){
                return article.leagueUrl === urlInfo.league;
            }
            return true;
        });

        feed.sort((first, second) => {return first[compateElem] > second[compateElem] ? -1 : 1});
        return feed.slice(0, 7);
    }

    forEachLi(article, index){
        const href = `/${article.leagueUrl}/${article.id}`;
        return  <li className="list-group-item" key={index}>
                    <Link to={href} >{article.header}</Link>
                    <span className="info-wrapper">
                        <Like readOnlny={true} article={article}/>
                        <Comment article={article}/>
                    </span>
                </li>
    }

    render(){
        const articles = this.getArticles();
        return <div className={this.props.listType}>
            <h2 className={this.props.listType + "-header text-center"}>{this.props.header}</h2>
            <ul className="list-group">
                {articles.map(this.forEachLi)}
            </ul>
        </div>
    }
}


NewsList = connect(mapStateToProps)(NewsList);

export default NewsList;
