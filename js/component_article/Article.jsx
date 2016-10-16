import React, {Component} from 'react';

class Article extends Component {
    render(){
        var article = this.props.article;
        return <article>
                <h2 className="article-header">{article.header}</h2>
                <img className="article-image" src={`./img/${article.imageUrl}`}/>
                <p className="article-body">{article.text}</p>
            </article>
    }
}

export default Article;