import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {return {feedState: state.feedState}};

class MostPopular extends Component{
    getMostPopularArticles(){
        var feed = this.props.feedState.slice();
        feed.sort((first, second) => {return first.like > second.like ? -1 : 1});
        return feed.slice(0, 10);
    }

    forEachLink(article, index){
        const href = `/${article.league}/${article.id}`;
        return <a href={href} className="list-group-item" key={index}>{article.header}</a>
    }

    render(){
        const mostPopular = this.getMostPopularArticles();
        return <div className="most-popular">
                    <h2 className="most-popular-header text-center">Most Popular</h2>
                    <div className="popular-list list-group">
                        {mostPopular.map(this.forEachLink)}
                    </div>
                </div>
    }
}


MostPopular = connect(mapStateToProps)(MostPopular);

export default MostPopular;
