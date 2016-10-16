import React, {Component} from 'react';
import Like from './../component_like/Like.jsx';

class Article extends Component {
    render(){
        var article = this.props.article;
        return <article>
                <h2 className="article-header">{article.header}</h2>
                <img className="article-image" src={`./img/${article.imageUrl}`}/>
                <p className="text-right likes-block">
                    <Like showCopy={true}  readOnlny={false} article={article}/>
                </p>
                <p className="article-body">{article.text}</p>

            </article>
    }
}

export default Article;