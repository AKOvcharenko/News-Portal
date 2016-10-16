import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './../store/store.js';
import changeLikeState from './../actions/actionChangeLikeState.js';

const mapStateToProps = state => {return {feedState: state.feedState}};

class Like extends Component {

    constructor(){
        super();
        this.changLikesNumber = this.changLikesNumber.bind(this);
    }

    changLikesNumber(){
        !this.props.readOnlny && store.dispatch(changeLikeState(this.props.article));
    }

    render(){
        var article = this.props.article;
        var likeState = 'like ' + (article.liked ?  'liked ' : '');
        likeState = likeState + (this.props.readOnlny ?  'read-only' : '');
        return <span onClick={this.changLikesNumber} className={likeState}>
                    {this.props.showCopy && <span className="likes-text">{article.liked ?  'I like it': 'Do you like it?'}</span>}
                    <span className="likes-manage"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                    <span className="likes-number">{article.like}</span>
               </span>
    }
}

Like = connect(mapStateToProps)(Like);

export default Like;