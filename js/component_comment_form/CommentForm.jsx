import React, {Component} from 'react';


class CommentForm extends Component {

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        var ids = ['email', 'name', 'comment'];
        var data = {};
        data.date = (new Date()).getTime();
        ids.forEach(id =>{
            var element = document.getElementById(id);
            data[id] = element.value;
            element.value = '';
        });
        this.props.changeComments(data);
        return false;
    }

    render() {
        return <div className="row comment-form">
                    <div className="col-md-12">
                        <div className="well">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name*</label>
                                    <input className="form-control" id="name" maxlength="100" name="name"
                                           placeholder="Name*" type="text" required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail*</label>
                                    <input className="form-control" id="email" name="email" placeholder="awesome@email.com"type="email" required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Comment*</label>
                                    <textarea className="form-control" cols="40" id="comment" name="comment" placeholder="What do you think*"rows="10"required=" required"></textarea>
                                </div>
                                <button type="submit" className="btn btn-block btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

    }
}

export default CommentForm;