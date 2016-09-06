import React, {Component} from 'react';
import Like from './../component_like/Like.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => {return {feedState: state.feedState}};

class NewsList extends Component{
    getArticles(){
        var  feed = this.props.feedState.slice();
        const compateElem = this.props.compateElem;
        feed.sort((first, second) => {return first[compateElem] > second[compateElem] ? -1 : 1});
        return feed.slice(0, 5);
    }

    forEachLi(article, index){
        const href = `/${article.league}/${article.id}`;
        return  <li className="list-group-item" key={index}>
                    <a href={href} >{article.header}</a>
                    <Like readOnlny="false" like={article.like} article={article}/>
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
