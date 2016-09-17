import React, {Component} from 'react';

class Comment extends Component {

    render(){
        const commentState = 'comment' + (this.props.article.commented ?  ' commented' : '');
        return <span className={commentState}>
                    <span className="comment-state"><i className="fa fa-comments" aria-hidden="true"></i></span>
                    <span className="comment-number">{this.props.article.comments}</span>
               </span>
    }
}

export default Comment;