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
        var likeState = 'like ' + (this.props.article.liked ?  'liked' : '');
        likeState = likeState + (this.props.readOnlny ?  'read-only' : '');
        return <span onClick={this.changLikesNumber} className={likeState}>
                    <span className="likes-manage"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                    <span className="likes-number">{this.props.like}</span>
               </span>
    }
}

Like = connect(mapStateToProps)(Like);

export default Like;