import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {return {feedState: state.feedState}};

class NewsList extends Component{
    getArticles(){
        var  feed = this.props.feedState.slice();
        const compateElem = this.props.compateElem;
        feed.sort((first, second) => {return first[compateElem] > second[compateElem] ? -1 : 1});
        return feed.slice(0, 5);
    }

    forEachLink(article, index){
        const href = `/${article.league}/${article.id}`;
        return <a href={href} className="list-group-item" key={index}>{article.header}</a>
    }

    render(){
        const articles = this.getArticles();
        return <div className={this.props.listType}>
            <h2 className={this.props.listType + "-header text-center"}>{this.props.header}</h2>
            <div className="list-group">
                {articles.map(this.forEachLink)}
            </div>
        </div>
    }
}


NewsList = connect(mapStateToProps)(NewsList);

export default NewsList;
