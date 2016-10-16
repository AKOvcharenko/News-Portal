import React, {Component} from 'react';
import CommentForm from './../component_comment_form/CommentForm.jsx'



class Opinions extends Component {

    constructor(){
        super();
        this.forEachComment = this.forEachComment.bind(this);
    }

    getReadableDate(date){
        date = new Date(+date);
        var dNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        var mNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var time = (date.toTimeString().split(' '))[0];
        var currDay = date.getDay();
        var currDate = date.getDate();
        var currMonth = date.getMonth();
        var currYear = date.getFullYear();
        var sup = "th";
        if (currDate == 1 || currDate == 21 || currDate == 31){sup = "st";}
        if (currDate == 2 || currDate == 22){sup = "nd";}
        if (currDate == 3 || currDate == 23){sup = "rd";}
        return `${time} ${dNames[currDay]} ${currDate}${sup} ${mNames[currMonth]} ${currYear}`;
    }

    forEachComment(comment, index){
        return <div className="opinion" key={index}>
            <span className="pull-left">
                <span className="author-image img-circle"/>
            </span>
            <div className="pull-left mar-l-20">
                <strong className="author-name text-success">{comment.name}</strong>
                <small>{comment.email}</small>
                <p className="small comment-date">{this.getReadableDate(comment.date)}</p>
                <p className="comment-text">{comment.comment}</p>
            </div>
            <div className="clearfix"></div>
        </div>
    }

    render(){
        var article = this.props.article;
        return <div>
            {article.comments.map(this.forEachComment)}
            <CommentForm changeComments={this.props.changeComments}/>
        </div>
    }
}

export default Opinions;